import React from 'react';



class QuizPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            quiz: props.quiz,
            selectedValue: '',


        }
    }

    handleChange = event => {
        this.setState({ selectedValue: event.target.value  });
    };

    moveNext = () => {
        this.clearBacks();
        this.setState({ current: this.state.current + 1 })
    }

    movePrevious = () => {
        this.clearBacks();
        this.setState({ current: this.state.current - 1 })


    }

    clearBacks = () => {
        var question = this.state.quiz[this.state.current]
        for (var i = 0; i < question.options.length; i++) {
            this.refs[i.toString()].style.background = "white";
        }
    }

    SubmitAnswer = () => {


        var question = this.state.quiz[this.state.current]
        var answer = question.answer;
        if (this.state.selectedValue === answer) {
            alert("your Answer is true")
        } else {
            alert("Your answer is false")
        }
        
    }
    revealCorrect =() =>{
        var question = this.state.quiz[this.state.current]
        var answer = question.answer;
        alert(answer)
    }
    render() {
        var question = this.state.quiz[this.state.current];
        var curQuestion = this.state.current + 1;
        var size = this.state.quiz.length;
        var moveRight = this.state.current + 1 < this.state.quiz.length;
        var moveLeft = this.state.current == 0;

        return (
            <div className="container">
                <div className="classes" elevation={4}>
                    <div component="p">
                        <h3 className="questionMeta"> Question  {curQuestion} / {size}</h3>
                        <hr style={{ marginBottom: "20px" }} />
                        <h1 variant="headline" component="h5">{question.question}</h1>
                        <ul>
                            {question.options.map((opt, index) => (
                                <li key={index} ref={index.toString()}>
                                    <input type="radio"
                                        checked={this.state.selectedValue === index.toString()}
                                        onChange={this.handleChange}
                                        value={index.toString()}
                                        name="radio-button-demo"
                                        aria-label="A"
                                    /> &nbsp; &nbsp;
                                    {opt}
                                </li>
                                
                            ))}
                        </ul>
                    </div>
                    
                    <div className="footer">
                        <button type="submit" className="btn btn-success" onClick={this.SubmitAnswer} >
                            Submit
                        </button>
                        {(moveLeft) ? (<button onClick={this.movePrevious} disabled className="btn btn-primary"  >
                            Previous
                        </button>) : (<button onClick={this.movePrevious} className="btn btn-primary"  >
                            Previous
                        </button>)}
                        {(moveRight) ? (<button type="button" className="btn btn-primary" onClick={this.moveNext}  >
                            Next
                        </button>) : (<button onClick={this.moveNext} disabled className="btn btn-primary" >
                            Next
                        </button>)}
                        <button type="btn" className="btn btn-danger" onClick={this.revealCorrect} >
                            Show Answer
                        </button>
                       


                    </div>
                </div>
            </div>
        );
    }
}



export default QuizPage;