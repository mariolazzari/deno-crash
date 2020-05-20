const encoder = new TextEncoder();

const greeter = encoder.encode("Ciao Deno!\nMy name is Mario.");
await Deno.writeFile("greet.txt", greeter);
