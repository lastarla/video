<template>
    <div id="wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td {
    margin:0;
    padding:0;
}
table {
    border-collapse:collapse;
    border-spacing:0;
}
fieldset,
img {
    border:0;
}
/*
    TODO think about hanlding inheritence differently, maybe letting IE6 fail a bit...
*/
address,
caption,
cite,
code,
dfn,
// em, //em被客户端用来表示斜体，不能reset。。。
// strong,
th,
var {
    font-style:normal;
    font-weight:normal;
}

ol,
ul {
    list-style:none;
}

caption,
th {
    text-align:left;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-size:100%;
    font-weight:normal;
}
q:before,
q:after {
    content:'';
}
abbr,
acronym {
    border:0;
    font-variant:normal;
}
/* to preserve line-height and selector appearance */
sup {
    vertical-align:text-top;
}
sub {
    vertical-align:text-bottom;
}
input,
textarea,
select {
    font-family:inherit;
    font-size:inherit;
    font-weight:inherit;
}
/*to enable resizing for IE*/
input,
textarea,
select {
    *font-size:100%;
}
/*because legend doesn't inherit in IE */
legend {
    color:#000;
}
html {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 14px;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
}
a {
    text-decoration: none;
}
@media screen and (min-width:640px) and (max-width:799px){
    html{font-size:24px}
}
@media screen and (min-width:800px){
    html{font-size:30px}
}
</style>
