module.exports =(req,res)=>{
    res.send(`
        <form>
            <fieldset>
                <legend>Login</legend>
                <input type="text">
            </fieldset>
        </form>
    `)
}