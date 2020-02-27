# Light Distribution

Algorithm that obtains the minimum amount of light spots needed to illuminate a room.

A very careful electrician is trying to illuminate at the lowest possible cost the customer rooms.The rooms that he illuminates are always in matrix form (See figure 1). Since the light spots are very expensive, he tries to Illuminate the entire room using the minimum amount of them. The light spots have only scope to illuminate the room horizontally and vertically way (See figure 2 and figure 3). The rooms can have walls inside them, in this case, the light range of a particular light spot would be interrupted (See figure 4).

<p align="center">
  <table align="center" style="width:70%">
  <tr>
    <td align="center"><img src="resources/figure1.png"><p>figure 1</td>
    <td align="center"><p><img src="resources/figure2.png"></p>figure 2</td>
  </tr>
  <tr>
    <td align="center"><p><img src="resources/figure3.png"></p>figure 3</td>
    <td align="center"><p><img src="resources/figure4.png"></p>figure 4</td>
  </tr>
</table>
</p>

## Options

* **Load room:** In this option the program must load a file
txt that contains the matrix of one and zeros that represents the room, where
the 0 represent the area of ​​the room that is without a wall and the 1 the zones
where there is a wall.

* **Show distribution:** This option
must show the solution of the minimum amount of light spots needed to illuminate the entire room.