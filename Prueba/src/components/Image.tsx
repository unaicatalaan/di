interface ImageData{
    src:string,
    alt:string,
    widht:string,
    height: string;
}

function Image(){
    let image ={
        src: 'https://assets.goal.com/images/v3/blt9eca44fe2c897922/8c194552c369022fa86931b94002017d588e39e3.jpg?auto=webp&format=pjpg&width=3840&quality=60',
        alt: 'Mejor jugador de la hsitoria',
        widht: '300px',
        height: '250px'
    }
    return <img src={image.src} alt={image.alt} width={image.widht} height={image.height}></img>
}

export default Image;