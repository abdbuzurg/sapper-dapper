<script>
    import { registration } from '../graphql/graphql';

    let user = {
        username: '',
        email: '',
        password: '',
        name: '',
        surname: '',
        type: false,
        language: "russian"
    };
    let confirmPassword = '';

    $: buttonState = (user.password === confirmPassword) && 
        user.username && user.name && user.surname && user.email;

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(user);

        if (user.type=="student") user.type = false;
        else user.type = true;

        //let register = onSubmitHandler(user);
    };
    const obSubmitHandler = (user) => {
        registration(user).then(
            (res) => {
                const response = res.data.registration;
                if (response.error_message) return response.error_message;
                else return response.success_message;
            }
        ).catch((err) => console.log(err));
    }

</script>

<div class="container">
    <h2>Signing up</h2>
    <form on:submit={onSubmit}>
        <div class="row"> 
            <div class="input-field col m6">
                <input id="username" type="text" class="validate" bind:value={user.username}>
                <label for="username">Username</label>
            </div>
            <div class="input-field col m6">
                <input id="email" type="text" class="validate" bind:value={user.email}>
                <label for="email">Email</label>
            </div>
        </div>
        <div class="row"> 
            <div class="input-field col m6">
                <input id="password" type="password" class="validate" autocomplete="on" bind:value={user.password}>
                <label for="password">Password</label>
            </div>
            <div class="input-field col m6">
                <input id="confirmPassword" type="password" class="validate" autocomplete="on" bind:value={confirmPassword}>
                <label for="confirmPassword">Confirm Password</label>
            </div>
        </div>
        <div class="row"> 
            <div class="input-field col l6 m12">
                <input id="name" type="text" class="validate" bind:value={user.name}>
                <label for="name">Name</label>
            </div>
            <div class="input-field col l6 m12">
                <input id="surname" type="text" class="validate" bind:value={user.surname}>
                <label for="surname">Surname</label>
            </div>
        </div>
        <div class="row">
            <div class="row col m6">
                <h5>Select Language</h5>
                <p class="col m6">
                    <label>
                        <input name="language" type="radio" value="russian" bind:group={user.language} checked/>
                        <span>Russian</span>
                    </label>
                </p>
                <p class="col m6">
                    <label>
                        <input name="language" type="radio" value="english" bind:group={user.language}/>
                        <span>English</span>
                    </label>
                </p>
            </div>
            <div class="row col m6">
                <h5>Who are you signing as</h5>
                <p class="col m6">
                    <label>
                        <input name="type" type="radio" value="teacher" bind:group={user.type}/>
                        <span>Teacher</span>
                    </label>
                </p>
                <p class="col m6">
                    <label>
                        <input name="type" type="radio" value="student" bind:group={user.type} checked/>
                        <span>Student</span>
                    </label>
                </p>
            </div>
        </div>
        <div class="row">
            <button class="col waves-effect waves-light btn" type="submit" disabled={!buttonState}>Register</button>
            <a class="col waves-effect waves-light btn" href="/">Go Home</a>
        </div>
    </form>
</div>