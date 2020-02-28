# Light Distribution

Algorithm that obtains the minimum amount of light spots needed to illuminate a room.

A very careful electrician is trying to illuminate at the lowest possible cost the customer rooms.The rooms that he illuminates are always in matrix form (See figure 1). Since the light spots are very expensive, he tries to Illuminate the entire room using the minimum amount of them. The light spots have only scope to illuminate the room horizontally and vertically way (See figure 2 and figure 3). The rooms can have walls inside them, in this case, the light range of a particular light spot would be interrupted (See figure 4.

<div>
<table style="width:70%;margin: 0 auto;">
  <tr>
    <td align="center"><img src="resources/figure1.png"><p>figure 1</p></td>
    <td align="center"><img src="resources/figure2.png"><p>figure 2</p></td>
  </tr>
  <tr>
    <td align="center"><img src="resources/figure3.png"><p>figure 3</p></td>
    <td align="center"><img src="resources/figure4.png"><p>figure 4</p></td>
  </tr>
</table>
</div>

## Options

* **Load room:** In this option the program must load a file
txt that contains the matrix of one and zeros that represents the room, where
the 0 represent the area of ​​the room that is without a wall and the 1 the zones
where there is a wall.

* **Show distribution:** This option
must show the solution of the minimum amount of light spots needed to illuminate the entire room.