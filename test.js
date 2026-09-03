


const users = new Map();

users.set("user1", { name: "John Doe", email: "john.doe@example.com" });
users.set("user2", { name: "Jane Smith", email: "jane.smith@example.com" });
users.set("user3", { name: "Bob Johnson", email: "bob.johnson@example.com" });
 
for (const [key, value] of users) {
    console.log(`Key: ${key}, ${value.name}, ${value.email}`);
}




