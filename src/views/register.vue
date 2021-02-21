<template>
    <div class="register">
        <el-form ref="registerForm" :model="registerForm" :rules="registerRules" class="register-form">
            <h3 class="title">itest</h3>
            <el-form-item prop="username">
                <el-input v-model="registerForm.username" type="text" auto-complete="off" placeholder="账号">
                    <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon"/>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input
                    v-model="registerForm.password"
                    type="password"
                    auto-complete="off"
                    placeholder="密码"
                >
                    <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon"/>
                </el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input
                    v-model="registerForm.checkPass"
                    type="password"
                    auto-complete="off"
                    placeholder="确认密码"
                >
                    <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon"/>
                </el-input>
            </el-form-item>
            <el-form-item prop="email">
                <el-input
                    v-model="registerForm.email"
                    type="text"
                    auto-complete="off"
                    placeholder="邮箱"
                >
                    <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon"/>
                </el-input>
            </el-form-item>
            <el-form-item prop="phoneNumber">
                <el-input
                    v-model="registerForm.phoneNumber"
                    type="text"
                    auto-complete="off"
                    placeholder="手机号"
                >
                    <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon"/>
                </el-input>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button
                    :loading="loading"
                    size="medium"
                    type="primary"
                    style="width:100%;"
                    @click.native.prevent="handleRegister"
                >
                    <span v-if="!loading">注 册</span>
                    <span v-else>注 册 中...</span>
                </el-button>
            </el-form-item>
        </el-form>
        <!--  底部  -->
        <div class="el-register-footer">
            <span>Copyright © 2020-2020 itest.vip All Rights Reserved.</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.registerForm.checkPass !== '') {
                    this.$refs.registerForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.registerForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            cookiePassword: "",
            registerForm: {
                username: "",
                password: "",
                checkPass: "",
                email: "",
                phoneNumber: ""
            },
            registerRules: {
                username: [
                    {required: true, trigger: "blur", message: "用户名不能为空"}
                ],
                pass: [
                    {validator: validatePass, trigger: 'blur'}
                ],
                checkPass: [
                    {validator: validatePass2, trigger: 'blur'}
                ],
            },
            loading: false,
            redirect: undefined
        };
    },
    created() {
        // this.getCookie();
    },
    methods: {

        getCookie() {

        },
        handleRegister() {
            this.loading = true;
            this.$store.dispatch("Register", this.registerForm).then(() => {
                this.$router.push({path: this.redirect || "/"}).catch(() => {
                });
            }).catch(() => {
                this.loading = false;
            });
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    //background-image: url("../assets/images/register-background.jpg");
    background-size: cover;
}

.title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #707070;
}

.register-form {
    border-radius: 6px;
    background: #ffffff;
    width: 400px;
    padding: 25px 25px 5px 25px;

    .el-input {
        height: 38px;

        input {
            height: 38px;
        }
    }

    .input-icon {
        height: 39px;
        width: 14px;
        margin-left: 2px;
    }
}

.register-tip {
    font-size: 13px;
    text-align: center;
    color: #bfbfbf;
}

.register-code {
    width: 33%;
    height: 38px;
    float: right;

    img {
        cursor: pointer;
        vertical-align: middle;
    }
}

.el-register-footer {
    height: 40px;
    line-height: 40px;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    font-family: Arial;
    font-size: 12px;
    letter-spacing: 1px;
}

.register-code-img {
    height: 38px;
}
</style>
