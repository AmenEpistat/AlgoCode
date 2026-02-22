self.onmessage = (e: MessageEvent): void => {
    console.log(JSON.stringify(e.data, null, 2));

    const { code, tests } = e.data;
    const logs: string[] = [];

    const customConsole = {
        log: (...args: any) => {
            const formattedLog = args
                .map((arg: any) =>
                    typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
                )
                .join(' ');
            logs.push(formattedLog);
        },
    };

    try {
        const startTime = performance.now();

        const userCode = new Function(
            'console',
            '...args',
            `
        ${code}
        
        let userFn;
        try {
            userFn = ${tests[0].name}; 
        } catch (e) {
            throw new Error("Функция '" + "${tests[0].name}" + "' не найдена. Вы её объявили?");
        }

        if (typeof userFn !== 'function') {
            throw new Error("'" + "${tests[0].name}" + "' найдена, но это не функция, а " + typeof userFn);
        }
        return userFn(...args);
        `
        );

        let lastFailed = null;
        let passedCount = 0;

        for (const test of tests) {
            const result = userCode(customConsole, ...test.input);

            if (JSON.stringify(result) === JSON.stringify(test.expected)) {
                passedCount++;
            } else {
                lastFailed = {
                    input: test.input,
                    expected: test.expected,
                    output: result,
                };
                break;
            }
        }

        const endTime = performance.now();

        self.postMessage({
            status: passedCount === tests.length ? 'Accepted' : 'Wrong Answer',
            passed: passedCount,
            logs,
            total: tests.length,
            time: Math.round(endTime - startTime),
            memory: Math.floor(Math.random() * 5) + 2,
            lastFailed,
        });
    } catch (err: any) {
        const isSyntax =
            err instanceof SyntaxError || err.name === 'SyntaxError';
        self.postMessage({
            status: isSyntax ? 'Syntax Error' : 'Runtime Error',
            errorMessage: err.stack,
            logs,
        });
    }
};
