import './styles.css'

export default function Footer(){
    return (
        <footer>
            Conheça também:
            <div className='footer-midia'>
                <a href='https://www.youtube.com/channel/UCdHlZugvc3w3hfHBSTLTD5w?sub_confirmation=1'>
                    <img src='https://img.icons8.com/?size=60&id=19318&format=png&color=FF3D00' alt='Youtube' />
                </a>
                <a href='https://github.com/initcodeexemplos'>
                    <img src='https://img.icons8.com/material-rounded/48/000000/github.png' alt='Linkedin' />
                </a>
                <a href='https://www.instagram.com/init_code'>
                    <img src='https://img.icons8.com/?size=50&id=Xy10Jcu1L2Su&format=png&color=000000' alt='Instagram' />
                </a>
                <a href='https://www.facebook.com/people/Init-Code/61556939284040/'>
                    <img src='https://img.icons8.com/color/48/000000/facebook.png' alt='Instagram' />
                </a>
                <a href='https://www.youtube.com/channel/UCdHlZugvc3w3hfHBSTLTD5w?sub_confirmation=1'>
                    <img src='https://img.icons8.com/color/48/000000/tiktok.png' alt='Instagram' />
                </a>
                <a href='https://www.linkedin.com/company/init-code/'>
                    <img src='https://img.icons8.com/?size=50&id=13930&format=png&color=0288D1' alt='Linkedin' />
                </a>
            </div>
            
            <span>
                &copy; 2024 - Todos os direitos reservados - Init Code 
            </span>
        </footer>
    )
}