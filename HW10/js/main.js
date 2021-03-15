let imgs = document.getElementsByTagName('img')
// console.log(imgs)
const promise = fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6')
.then((response) => {
    if (response.status !== 200) {
        console.log('Looks like there was a problem');
        console.log(`Status Code: ${response.status}`);
        return;
    }
    return response.json();
}
)

.then((data) => {
    data.forEach(({image_url,description,id}) => { // располажение объектов
        if(image_url){
            const div = document.createElement('div')
            const img = document.createElement('img')
            const p = document.createElement('p')
            // console.log('img',image_url)
            // console.log('p:', description)
            //тянем картинки через ключ image
            img.setAttribute('src', image_url)
            p.innerHTML = description
            img.style.width = '200px';
            img.style.height = '400px'
            p.style.width = '200px';
            p.style.marginLeft = '30px'
            p.style.display = 'inline-block'
            div.appendChild(img)
            div.appendChild(p)
            document.body.prepend(div)
            // document.body.prepend(p)
            // document.body.prepend(img) // prepend - добавление в начало
            img.addEventListener('click',function(){
                localStorage.setItem('id',id)
                console.log(id)
            })
        }
    });
})
.catch(function(err) {
    console.log('Fetch Error :-S', err);
});

