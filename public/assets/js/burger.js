// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");
        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
        }).then(
            function() {
                console.log("Consumed " + $(this).parent().text());
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#ba").val().trim(),
        };
        console.log(newBurger);
        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Added new Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});