const AboutPage = () => {
    return (
        <div>
            <a href={'/about'} onClick={(e) => {
           e.preventDefault()
                console.log('ссылка')
            }}> ancor
                <button onClick={(event) => {
                    // event.preventDefault()
                    event.stopPropagation()
                    console.log('кнопка')
                }}>кнопка</button>

            </a>
        </div>
    );
};

export default AboutPage;