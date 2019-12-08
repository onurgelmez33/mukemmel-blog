$(".btnSil").on('click', function () {
    var id = $(this).val();
    if(confirm('sil!')){
        $.ajax({
            url: 'https://mukemmelblog1.herokuapp.com/api/postdelete/' + id,
            type: 'get',
            success: function (response) {
                $("#post_" + id).remove();
                alert(response);
            }
        })
    }
});