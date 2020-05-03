<script>
    const user = {
        username: '',
        password: '',
    }

    $: buttonState = user.password && user.password;

</script>

<div class="container">
    <form>
        <h4>Login</h4>
        <div class="input-field col m6">
            <input id="username" type="text" class="validate" bind:value={user.username}>
            <label for="username">Username</label>
        </div>
        <div class="input-field col m6">
            <input id="password" type="password" class="validate" bind:value={user.password}>
            <label for="password">Password</label>
        </div>
        <button class="waves-effect waves-light btn" type="submit" disabled={!buttonState}>Login</button>
    </form>
</div>