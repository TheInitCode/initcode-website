// eslint-disable-next-line react/prop-types
export default function Midia({ size = 50 }) {
    return (
        <div className='midia'>
            <a href='https://www.youtube.com/channel/UCdHlZugvc3w3hfHBSTLTD5w?sub_confirmation=1'>
                <img src={`https://img.icons8.com/?size=${size}&id=19318&format=png&color=FF3D00`} alt='Youtube' />
            </a>
            <a href='https://github.com/initcodeexemplos'>
                <img src={`https://img.icons8.com/material-rounded/${size}/000000/github.png`} alt='GitHub' />
            </a>
            <a href='https://www.instagram.com/init_code'>
                <img src={`https://img.icons8.com/?size=${size}&id=Xy10Jcu1L2Su&format=png&color=000000`} alt='Instagram' />
            </a>
            <a href='https://www.facebook.com/people/Init-Code/61556939284040/'>
                <img src={`https://img.icons8.com/color/${size}/000000/facebook.png`} alt='Facebook' />
            </a>
            <a href='https://www.tiktok.com/@init.code'>
                <img src={`https://img.icons8.com/color/${size}/000000/tiktok.png`} alt='Tiktok' />
            </a>
            <a href='https://www.linkedin.com/in/renan-ponick-9107a5174/'>
                <img src={`https://img.icons8.com/?size=${size}&id=13930&format=png&color=0288D1`} alt='Linkedin' />
            </a>
        </div>
    )
}