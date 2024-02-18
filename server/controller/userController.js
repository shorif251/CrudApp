const UserFind = (req, res) => {
    try {
        res.status(200).json({
            users: 'Users will be shown',
            success: true,
        });
    } catch (err) {
        res.status(500).json({
            users: 'Users will not be Found',
            success: false,
        });
    }
};

const UserFindById = (req, res) => {
    try {
        res.status(200).json({
            users: 'User will be shown',
            success: true,
        });
    } catch (err) {
        res.status(500).json({
            users: 'Users will not be Found',
            success: false,
        });
    }
};

const UserCreate = (req, res) => {
    try {
        res.status(200).json({
            users: 'Users will be Created',
            success: true,
        });
    } catch (err) {
        res.status(500).json({
            users: 'Users will not be Created',
            success: false,
        });
    }
};

const UserUpdate = (req, res) => {
    try {
        res.status(200).json({
            users: 'Users will be Updated',
            success: true,
        });
    } catch (err) {
        res.status(500).json({
            users: 'Users will not be Updated',
            success: false,
        });
    }
};

const UserDelete = (req, res) => {
    try {
        res.status(200).json({
            users: 'Users will be Deleted',
            success: true,
        });
    } catch (err) {
        res.status(500).json({
            users: 'Users will not be Deleted',
            success: false,
        });
    }
};

module.exports = {
    UserFind,
    UserFindById,
    UserCreate,
    UserUpdate,
    UserDelete,
};
