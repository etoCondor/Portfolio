const pressStart = (props) => {
    const {setCurrentPage} = props;
    return (<><p>Press start button</p>
    <span onClick={()=>{setCurrentPage('whitePage')}}>START</span></>)
}
export default pressStart