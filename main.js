function ask(){
    responses =[
        "My reply is no",
        "yes",
        "Unable to determine",
        "Without a doubte",
        "yes - definitely",
        "you may rely on it",
        "Ask again later",
        "Most likely",
        "My reply is no",
        "Most likely",

    ];
    
    let randomNumber = Math.floor(Math.random()*responses.length);
    document.getElementById("answers").innerHTML = responses[randomNumber];
}