try {
    let age = -5;

    if (age < 0) {
        throw new Error("Age cannot be negative");
    }

    console.log("Valid age:", age);
}
catch (error) {
    console.log("Error handled:", error.message);
}