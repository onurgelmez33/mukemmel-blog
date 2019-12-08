$(".btnSil").on('click', function () {
    var id = $(this).val();
    if(confirm('sil!')){
        $.ajax({
            url: 'http://localhost:3000/api/postdelete/' + id,
            type: 'get',
            success: function (response) {
                $("#post_" + id).remove();
                alert(response);
            }
        })
    }
});