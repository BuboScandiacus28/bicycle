let lib = () => {
    let script = document.getElementById('my_lib');
    let src_to_img = script.getAttribute('data-src-to-img');
    let body = document.body;
    
    let img = document.createElement('img');

    img.setAttribute('src', src_to_img);
    img.setAttribute('id', 'img_to_desktop');

    body.style.position = 'response';
    body.style.zIndex = '1';

    img.style.position = 'absolute';
    img.style.zIndex = '9998';
    img.style.top = '0';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, 0)';
    img.style.margin = 'auto';
    img.style.opacity = '0.3';

    body.appendChild(img);

    img.addEventListener('click', (e) => {
        e.currentTarget.style.display = 'none';
    });

    let btn = document.createElement('button');

    btn.style.position = 'fixed';
    btn.style.zIndex = '9999';
    btn.style.color = '#fff';
    btn.style.backgroundColor = '#0d73fc';
    btn.style.padding = '15px 30px';
    btn.style.bottom = '50px';
    btn.style.right = '25px';
    btn.style.borderRadius = '15px';
    btn.style.border = '0px';

    btn.textContent = 'Наложить макет';

    body.appendChild(btn);

    btn.addEventListener('click', () => {
        document.getElementById('img_to_desktop').style.display = 'block';
    });
}

lib();

