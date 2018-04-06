function readPost() {
    var post = document.getElementById('postId').value;
    if (post=="" || post==null) {
        document.getElementById('postId').placeholder = "Não foi possível publicar seu post!";
    }
}