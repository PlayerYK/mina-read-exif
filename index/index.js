// miniprogram/pages/exif/index.js

// import EXIF from 'exif'
var myexif = require('myexif.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    exif:null,
    iptc:null,
  },

  bindGetExif: function (e) {
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: res => {
        var array = wx.getFileSystemManager().readFileSync(res.tempFilePaths[0]);

        var r = myexif.handleBinaryFile(array);

        console.log(r);
        that.setData({
          exif:r.data,
          iptc:r.iptcdata,
          test:JSON.stringify(r.data.YResolution)
        })
      },
      fail: console.error
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})