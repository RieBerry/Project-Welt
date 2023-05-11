import { error } from 'console';
import { Configuration, OpenAIApi } from 'openai';
import readline from 'readline';

const configuration = new Configuration({
    organization: "org-3OJ52ut8x2z0DSSYolnG8dLh",
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userInterface.prompt();

userInterface.on("line", async (input) => {
    await openai
        .createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input }],
        })
        .then((result) => {
            console.log(result.data.choices[0].message.content);
            userInterface.prompt();
        }).catch(error => console.log(error));

});

