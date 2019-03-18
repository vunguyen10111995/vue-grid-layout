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
                :layout.sync="layout"
                :col-num="12"
                :row-height="25"
                :is-draggable="isDraggable"
                :is-resizable="isResizable"
                :vertical-compact="true"
                :margin="[5, 5]"
                :use-css-transforms="true"
                @layout-created="layoutCreatedEvent"
            >
                <grid-item
                    v-for="(item) in layout"
                    :key="item.i"
                    :x="item.x"
                    :y="item.y"
                    :w="item.w"
                    :h="item.h"
                    :i="item.i"
                    @resize="resizeEvent"
                    @move="moveEvent"
                    @resized="resizedEvent"
                    @moved="movedEvent"
                >
                    <div class="image-item">
                        {{ text }}
                        <span
                            v-if="canEdit"
                            class="el-icon-delete delete-item"
                            @click="deleteItem(item)"
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
        {
            x: 0, y: 0, w: 3, h: 3, i: '0',
        },
        {
            x: 2, y: 0, w: 2, h: 4, i: '1',
        },
        {
            x: 4, y: 0, w: 2, h: 5, i: '2',
        },
        {
            x: 6, y: 0, w: 2, h: 3, i: '3',
        },
        {
            x: 8, y: 0, w: 2, h: 3, i: '4',
        },
        {
            x: 10, y: 0, w: 2, h: 3, i: '5',
        },
        {
            x: 0, y: 5, w: 2, h: 5, i: '6',
        },
    ];

    export default {
        data() {
            return {
                layout: layoutDefault,
                edit: false,
                isDraggable: false,
                isResizable: false,
                canEdit: false,
                text: 'Việt Nam vô địch',
            };
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
                this.canEdit = false;
            },


            deleteItem(item) {
                const newLayout = [...this.layout];
                const itemIndex = _findIndex(this.layout, (data => data.i === item.i));
                newLayout.splice(itemIndex, 1);
                this.layout = newLayout;
            },

            addContent() {
                this.layout.push({
                    x: 0, y: 0, w: 3, h: 3, i: `${this.layout.length + 1}`,
                });
            },

            resizeEvent(i, newH, newW, newHPx, newWPx) {
                console.log(`RESIZE i=${i}, H=${newH}, W=${newW}, H(px)=${newHPx}, W(px)=${newWPx}`);
            },

            movedEvent(i, newX, newY) {
                console.log(`MOVED i=${i}, X=${newX}, Y=${newY}`);
            },

            resizedEvent(i, newH, newW, newHPx, newWPx) {
                console.log(`RESIZED i=${i}, H=${newH}, W=${newW}, H(px)=${newHPx}, W(px)=${newWPx}`);
            },

            moveEvent(i, newX, newY) {
                console.log(`MOVE i=${i}, X=${newX}, Y=${newY}`);
            },

            layoutCreatedEvent(newLayout) {
                console.log(`Created layout: ${newLayout}`);
            },
        },
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
