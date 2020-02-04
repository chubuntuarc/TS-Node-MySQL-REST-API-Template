import {App} from './app'; // Import the App class.

async function main(){

    const app = new App(); // Creates an instance of the class with the desired port.
    await app.listen(); // App listen method.

}

main(); // Run the project.