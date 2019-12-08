import { server } from '../config';
$(".btnSil").on('click', function () {
    var id = $(this).val();
    if(confirm('sil!')){
        $.ajax({
            url: `${server}/api/posts/${id}`,
            type: 'get',
            success: function (response) {
                $("#post_" + id).remove();
                alert(response);
            }
        })
    }
});