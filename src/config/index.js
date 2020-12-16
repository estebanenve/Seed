// Levanta las variables de entorno del archivo .env
require('dotenv').config({ path: require('path').join(__dirname, '.env') })

//---------------------- Variables de Entorno --------------------------------
let vars = {
    //General
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    pwd: process.env.PWD || "",

    //ADN
    ADNGitUser: process.env.ADN_GIT_USER || 'VentumSoftware', // <ADN-GIT-USER>
    ADNGitRepo: process.env.ADN_GIT_REPO || 'ADN-Masterbus-IOT', // <ADN-GIT-USER-REPO>
    //ADNGitAuthToken: process.env.ADN_GIT_AUTH_TOKEN || '29d84d785cd8c440b311721816cb7f8855e51983', // <AUTH-TOKEN>
    ADNGitAuthToken: 'd2b1764592220113529a2f25b3cf1bf158d3fac3',
    //Encryptacion JWT
    //TODO: Esto debería estar acá o en el adn?
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", // key privada que uso para hashear passwords
    jwtDfltExpires: process.env.JWT_DURATION || 3600, // Cuanto duran los tokens por dflt en segundos
    saltWorkFactor: process.env.SALT_WORK_FACTOR || 10, //A: las vueltas que usa bcrypt para encriptar las password
}

module.exports = vars;