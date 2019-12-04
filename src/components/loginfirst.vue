<template>
   <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column"></div>
                <div class="column is-4">
                    <div class="box">
                        <div class="notification has-text-centered register-welcome"><strong>Let's get you started!</strong></div>
                        <form role="form" method="POST" action="https://booknshelf.com/register"><input type="hidden" name="_token" value="5CmNkZk1hq0MYZPtWCKmTOS7xdjtr4XfmDHGOvLJ">
                            <!-- <div class="field"><label class="label">What's your name?</label>
                                <p class="control"><input type="text" name="name" value="" placeholder="e.g. Jon Snow" class="input "></p>
                            </div> <label class="label">Choose your username.</label>
                            <div class="field has-addons">
                                <p class="control"><a class="button is-static">booknshelf.com/@</a></p>
                                <p class="control"><input type="text" name="username" value="" placeholder="username" class="input "></p>
                            </div>  -->
                            <label class="label">What's your email address?</label>
                            <div class="field">
                                <input type="text" name="email" value="" placeholder="Enter a valid email address" class="input "> <span class="icon is-small is-left"><i class="fa fa-envelope"></i></span>
                            </div>

                            <div class="field">
                                <p class="control"><label class="label">Choose a strong password</label> <input type="password" name="password" placeholder="Your Password" class="input "></p><span class="icon is-small is-left"><i class="fa fa-envelope"></i></span>
                            </div>

                            <label class="label">This is your phone ?</label>
                            <div class="field">
                                <input type="password" name="password" placeholder="Your Phone Number" class="input "><span class="icon is-small is-left"><i class="fa fa-envelope"></i></span>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <p class="control has-text-centered"><button type="submit" name="register" class="button is-primary full-width-button"><strong>Sign up</strong></button></p>
                                </div>
                            </div>
                            
                            <div class="field">
                                <div class="control">
                                    <p class="control has-text-centered">
                                        Have an account? <a href="/login">Sign in</a></p>
                                </div>
                            </div>
                        </form>
                    </div> 
                    <!-- <span class="or-wrapper"><span class="or-text">or</span></span> -->
                    <!-- <div class="box">
                        <div class="field">
                            <p class="control"><a href="https://booknshelf.com/auth/facebook" class="button fb-button"><span class="icon"><i class="fa fa-facebook"></i></span> <span><strong>Sign up with Facebook</strong></span></a></p>
                        </div>
                        <div class="field">
                            <p class="control"><a href="https://booknshelf.com/auth/twitter" class="button twt-button"><span class="icon"><i class="fa fa-twitter"></i></span> <span><strong>Sign up with Twitter</strong></span></a></p>
                        </div>
                        <div class="field">
                            <p class="control"><a href="https://booknshelf.com/auth/goodreads" class="button goodreads-button"><span class="icon"><i class="icon-light"><span style="font-family: helvetica;">g</span></i></span> <span><strong>Sign up with Goodreads</strong></span></a></p>
                        </div>
                    </div> -->
                </div>
                <div class="column"></div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'loginfirst',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>