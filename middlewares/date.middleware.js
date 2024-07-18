module.exports = (req, res, next) => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const hours = currentDate.getHours();

    if(hours >= 9 || hours <= 17 || day != 'saturday' || day != 'sunday'){
        next();
    }
    else {
        res.send("currently out of service try again later!")
    }
}