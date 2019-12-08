$(".btnSil").on('click', function () {
    var id = $(this).val();
    if(confirm('sil!')){
        $.ajax({
            url: '/api/postdelete/' + id,
            type: 'get',
            success: function (response) {
                $("#post_" + id).remove();
                alert(response);
            }
        })
    }
});