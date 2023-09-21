import './_suggestionBar.scss'

export default function SuggestionBar() {
    return (
            <div className="container">
                <p>Suggestion bar is running</p>
                <div className="row">
                    <div className="col-5">
                        <img
                            src="https://cdn.discordapp.com/attachments/1151490874195316856/1152992123059175694/b2c44a9549a5cf8c9eebb8eb8fc51213.jpg"
                            className="suggestion__Video"
                            alt="Suggestion video"
                        />
                    </div>
                    <div className="col-7">
                        <span>Sample title</span>
                        <p>This is user name</p>
                        <p>Display like and views</p>
                    </div>
                </div>
            </div>
    )
}