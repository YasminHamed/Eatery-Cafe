(function(){
    var searchBox = document.querySelector('#search-item')
    var storeItems = document.querySelectorAll('.store-item')
    searchBox.addEventListener('keyup', (e) => {
        var searchFilter = e.target.value.toLowerCase().trim()
        //display only items that contain filter input
        storeItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })
})();
function buy(){
    alert('added to cart !')
}