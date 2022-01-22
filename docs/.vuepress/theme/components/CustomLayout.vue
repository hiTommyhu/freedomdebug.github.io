<template>
    <div>
        <slot name="navbar-before">
            navbar-before
        </slot>
        <slot name="navbar-after">
            navbar-after
        </slot>
        <slot name="sidebar-top">
            sidebar-top
        </slot>
        <slot name="sidebar-bottom">
            sidebar-bottom
        </slot>
        <slot name="page-top">
            page-top
        </slot>
        <slot name="page-bottom">
            page-bottom
        </slot>
        <Content />
    </div>
 </template>
 
 <script>
 export default {
 
 }
 </script>
 
 <style>
 
 </style>