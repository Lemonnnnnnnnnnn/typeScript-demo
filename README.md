全局安装`typescript`（编译）和`ts-node`（直接运行）

通过`tsc [name]` 来编译ts文件， 通过 `--outDir [dir_name]` 来指定输出文件夹

 若想要把编译与运行结合起来，可使用ts-node模块：

```bash
npm install -t ts-node
```