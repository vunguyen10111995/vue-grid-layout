<template>
    <div class="container-fluid">
        <div class="title text-center">
            <h2> Bugs of the City </h2>
            <div v-if="edit">
                <el-button @click="toPreview">
                    Preview
                </el-button>
                <el-button @click="addContent">
                    Add
                </el-button>
            </div>
            <div v-else>
                <el-button @click="toEdit">
                    Edit
                </el-button>
            </div>
        </div>
        <hr>
        <div>
            <grid-layout
                :layout="layout"
                :col-num="12"
                :row-height="25"
                :is-draggable="isDraggable"
                :is-resizable="isResizable"
                :vertical-compact="true"
                :margin="[5, 5]"
                :use-css-transforms="true"
            >
                <grid-item v-for="(item, index) in layout"
                   :key="index"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="index"
                   @resize="resizeEvent"
                   @move="moveEvent"
                   @resized="resizedEvent"
                   @moved="movedEvent"
                >
                    <div class="image-item">
                        {{ text }}
                        <span
                            v-if="canEdit"
                            @click="deleteItem(item)"
                            class="el-icon-delete delete-item"
                        />
                    </div>
                </grid-item>
            </grid-layout>
        </div>
    </div>
</template>

<script>
    import _findIndex from 'lodash/findIndex';
    const layoutDefault = [
        {x: 0, y: 0, w: 2, h: 2},
        {x: 1, y: 1, w: 2, h: 4},
        {x: 2, y: 2, w: 2, h: 5},
        {x: 3, y: 3, w: 2, h: 5},
        {x: 4, y: 4, w: 2, h: 5}
    ];

    export default {
        data() {
            return {
                layout: layoutDefault,
                edit: false,
                isDraggable: false,
                isResizable: false,
                canEdit: false,
                text: 'Việt Nam vô địch'
            }
        },

        methods: {
            toEdit() {
                this.edit = true;
                this.isDraggable = true;
                this.isResizable = true;
                this.canEdit = true;
            },

            toPreview() {
                this.edit = false;
                this.isDraggable = false;
                this.isResizable = false;
                this.canEdit = false
            },


            deleteItem(item) {
                let itemIndex = _findIndex(this.layout, item => item.i === i);
                console.log(itemIndex)
            },

            addContent() {
                this.layout.push({x: 0, y: 0, w:2, h:2, i:this.layout.length + 1})
            },

            resizeEvent: function(i, newH, newW, newHPx, newWPx){
                console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
            },

            movedEvent: function(i, newX, newY){
                console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
            },

            resizedEvent: function(i, newH, newW, newHPx, newWPx){
                console.log("RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
            },

            moveEvent: function(i, newX, newY){
                console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
            },
        }
    };
</script>

<style lang="scss">
    .container-fluid {
        width: 930px;
        margin: 100px auto;
        max-width: 1140px;
    }

    .title {
        font-family: Lilita One,cursive;
        color: #f48fb1;
        font-size: 50px;
    }

    .hr-element {
        border-top: 1px solid red;
    }

    .image-item {
        position: relative;
        height: 100%;
        border: 2px solid rgb(252, 228, 236);
        border-radius: 5px;
    }

    .delete-item {
        position: absolute;
        bottom: 0;
        left: 0;
    }
</style>
