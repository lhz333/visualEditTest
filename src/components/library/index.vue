<template>
  <div class="library-list" :class="{ active: selectedModules.id === item.id }">
    <div class="action">
      <p>{{ item.name }}</p>
      <el-button type="text" icon="el-icon-delete" @click.stop="handleDelete(item)">删除</el-button>
    </div>
    <!-- 轮播类型 -->
    <swiper v-if="item.type === 'banner'" :item="item"></swiper>

    <!-- linkUrl功能链配图片，img配置图片菜单，imgs配置纯图片 点击图片有各种跳转（链接类型） -->
    <home-link
      v-if="item.type == 'linkUrl' || item.type == 'img' || item.type == 'imgs'"
      :item="item"
    ></home-link>

    <!-- 文字菜单配二级，点图片展示文字，一行文字一个子导航，点文字有跳转  -->
    <home-txt v-if="item.type === 'txt'" :item="item"></home-txt>

    <!-- goodsGroup- 商品组-- > type=3--  一般配图片 + 商品组，无更多，点图片有各种跳转（链接类型）
    imgGoods--  纵向图片商品组--  type=9--  配图片 + 商品，图片上面，商品下面，同商品组导航-->
    <goods-group v-if="item.type == 'goodsGroup' || item.type == 'imgGoods'" :item="item"></goods-group>

    <!-- 横向双图 -->
    <double-cross-picture v-if="item.type == 'crosswise'" :item="item"></double-cross-picture>

    <!-- 商品（3个一组） -->
    <goods-group-three
      v-if="item.type == 'goodsGroupThree' || item.type == 'recommend'"
      :item="item"
    ></goods-group-three>

    <!-- 商品（6个一组） -->
    <goods-group-six v-if="item.type == 'goodsGroupSix'" :item="item"></goods-group-six>

    <!-- 商品（9个一组） -->
    <goods-group-nine v-if="item.type == 'goodsGroupNine'" :item="item"></goods-group-nine>

    <!-- 图片+商品（6个一组） 横向 -->
    <img-goods-six v-if="item.type == 'imgGoodsSix'" :item="item"></img-goods-six>

    <!-- 图片+商品（9个一组）横向 -->
    <img-goods-nine v-if="item.type == 'imgGoodsNine'" :item="item"></img-goods-nine>

    <!-- 可滑动商品区 -->
    <img-goods-move
      v-if="
        item.type == 'imgGoodsMove' &&
          (item.images != null ||
            item.goodsList != null ||
            item.videoUrl != null)
      "
    ></img-goods-move>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import swiper from "./swiper";
import HomeTxt from "./homeTxt";
import HomeLink from "./homeLink";
import GoodsGroup from "./goodsGroup";
import DoubleCrossPicture from "./doubleCrossPicture";
import GoodsGroupThree from "./goodsGroupThree";
import GoodsGroupSix from "./goodsGroupSix";
import GoodsGroupNine from "./goodsGroupNine";
import ImgGoodsSix from "./imgGoodsSix";
import ImgGoodsNine from "./imgGoodsNine";
import ImgGoodsMove from "./imgGoodsMove";
export default {
  name: "",
  //实例的数据对象
  data () {
    return {};
  },
  components: {
    swiper,
    HomeLink,
    HomeTxt,
    GoodsGroup,
    DoubleCrossPicture,
    GoodsGroupThree,
    GoodsGroupSix,
    GoodsGroupNine,
    ImgGoodsSix,
    ImgGoodsNine,
    ImgGoodsMove
  },
  //数组或对象，用于接收来自父组件的数据
  props: {
    item: {
      type: Object
    }
  },
  //计算
  computed: {
    ...mapState({
      pageModulesList: "pageModules",
      selectedModules: "selectedModules"
    })
  },
  //方法
  methods: {
    ...mapActions(["changeSelectedModules"]),
    handleDelete (data) {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          if (!data.id) return;
          this.$message.success("删除成功");
          this.pageModulesList.list.splice(
            this.pageModulesList.list.findIndex(item => item.id === data.id),
            1
          );
          if (data.id === this.selectedModules.id) {
            this.changeSelectedModules({});
          }
        })
        .catch(() => {
          this.$message.info("取消删除");
        });
    }
  },
  mounted () { },
  //监听
  watch: {}
};
</script>

<style lang="less" scoped>
.library-list {
  position: relative;
  border: 1px solid transparent;
  cursor: pointer;
  .action {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    display: none;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    color: #2589ff;
    background: rgba(255, 255, 255, 0.8);
  }
  &:hover {
    border-color: #2589ff;
    .action {
      display: flex;
    }
  }
  &.active {
    border-color: #2589ff;
  }
}
</style>
