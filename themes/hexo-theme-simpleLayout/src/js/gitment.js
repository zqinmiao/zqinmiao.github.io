(function () {
    var gitment = new Gitment({
        owner: 'zqinmiao',
        repo: 'zqinmiao.github.io',
        oauth: {
            client_id: '30dead4389a232431a46',
            client_secret: '039e0c7f9a8303e2d01d66e150134d591d1e7703',
        },
    });
    gitment.render('comment-wrap');
}());