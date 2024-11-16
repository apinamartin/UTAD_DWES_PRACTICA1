const ENGINE_DB = process.env.ENGINE_DB
const pathModels = (ENGINE_DB === 'nosql') ? './nosql/' : './mysql'

const models = {
    userModel: require(pathModels + 'user.model'),
    postModel: require(pathModels + 'post.model'),
    likeModel: require(pathModels + 'like.model'),
    followModel: require(pathModels + 'follow.model')
}

module.exports = models