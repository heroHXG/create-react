

// URLSearchParams 接口定义了一些实用的方法来处理 URL 的查询字符串。
// 一个实现了 URLSearchParams 的对象可以直接用在 for...of 结构中，例如下面两行是相等的：(此特性在 Web Worker 中可用。)
for (const [key, value] of mySearchParams) {}
for (const [key, value] of mySearchParams.entries()) {}

// 构造函数
URLSearchParams()   //返回一个 URLSearchParams 对象。该接口不继承任何属性
//方法
URLSearchParams.append()  //插入一个指定的键/值对作为新的搜索参数。
URLSearchParams.delete()  //从搜索参数列表里删除指定的搜索参数及其对应的值。
URLSearchParams.entries()  //返回一个iterator可以遍历所有键/值对的对象。
URLSearchParams.get()  //获取指定搜索参数的第一个值。
URLSearchParams.getAll()  //获取指定搜索参数的所有值，返回是一个数组。
URLSearchParams.has()  //返回 Boolean 判断是否存在此搜索参数。
URLSearchParams.keys()  //返回iterator 此对象包含了键/值对的所有键名。
URLSearchParams.set()  //设置一个搜索参数的新值，假如原来有多个值将删除其他所有的值。
URLSearchParams.sort() // 按键名排序。
URLSearchParams.toString() //返回搜索参数组成的字符串，可直接使用在URL上。
URLSearchParams.values() // 返回iterator 此对象包含了键/值对的所有值。

// 示例
var paramsString = "q=URLUtils.searchParams&topic=api"
var searchParams = new URLSearchParams(paramsString);
for (let p of searchParams) {
  console.log(p);
}
searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"
Gotchas
    //URLSearchParams构造函数不会解析完整 URL，但是如果字符串起始位置有 ? 的话会被去除。

var paramsString1 = "http://example.com/search?query=%40";
var searchParams1 = new URLSearchParams(paramsString1);

searchParams1.has("query"); // false 
searchParams1.has("http://example.com/search?query"); // true

searchParams1.get("query"); // null
searchParams1.get("http://example.com/search?query"); // "@" (equivalent to decodeURIComponent('%40'))

var paramsString2 = "?query=value";
var searchParams2 = new URLSearchParams(paramsString2);
searchParams2.has("query"); // true 

var url = new URL("http://example.com/search?query=%40");
var searchParams3 = new URLSearchParams(url.search);
searchParams3.has("query") // true
