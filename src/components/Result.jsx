export default function Result({ countCorrectAnswers }) {
    return (
        <>
            <p>
                You got <strong>{countCorrectAnswers*10}</strong> points!
            </p>
            <p>Thank you for playing!</p>
        </>
    );
}