console.log("loaded")


var terms = ["dog", "cat", "fish"]


function create() {
    $("#btnArea").empty();
    for (var i = 0; i < terms.length; i++) {
        $("#btnArea").append(`
        <button type="button" class="btn btn-danger" value="${terms[i]}">${terms[i]}</button>
        `)
    }
};

create();



$("#btnArea").on("click", ".btn", function () {
    var apiKey = "89IA6dvzqYVVzPH9uXiMEzkVCEGYBMMJ";
    var searchTerm = $(this).attr("value");
    console.log(searchTerm);
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=5`;
    $.ajax({
        url: url,
        type: "GET",
        success: function (results) {
            console.log(results)
            img.src="data.data[i].images.original.url"
        },
        error: function () { }
    })
})

$("#search").click(function (event) {
    event.preventDefault();
    var userInput = $("#searchInput").val()
    console.log(userInput);
    terms.push(userInput);
    create();
})


