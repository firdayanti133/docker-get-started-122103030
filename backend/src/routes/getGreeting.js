const GREETING = 'Selamar Datang di Aplikasi Docker Saya!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
