/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 254.0, "minX": 0.0, "maxY": 565.0, "series": [{"data": [[0.0, 254.0], [0.1, 254.0], [0.2, 254.0], [0.3, 254.0], [0.4, 254.0], [0.5, 254.0], [0.6, 254.0], [0.7, 254.0], [0.8, 254.0], [0.9, 254.0], [1.0, 263.0], [1.1, 263.0], [1.2, 263.0], [1.3, 263.0], [1.4, 263.0], [1.5, 263.0], [1.6, 263.0], [1.7, 263.0], [1.8, 263.0], [1.9, 263.0], [2.0, 277.0], [2.1, 277.0], [2.2, 277.0], [2.3, 277.0], [2.4, 277.0], [2.5, 277.0], [2.6, 277.0], [2.7, 277.0], [2.8, 277.0], [2.9, 277.0], [3.0, 314.0], [3.1, 314.0], [3.2, 314.0], [3.3, 314.0], [3.4, 314.0], [3.5, 314.0], [3.6, 314.0], [3.7, 314.0], [3.8, 314.0], [3.9, 314.0], [4.0, 334.0], [4.1, 334.0], [4.2, 334.0], [4.3, 334.0], [4.4, 334.0], [4.5, 334.0], [4.6, 334.0], [4.7, 334.0], [4.8, 334.0], [4.9, 334.0], [5.0, 334.0], [5.1, 334.0], [5.2, 334.0], [5.3, 334.0], [5.4, 334.0], [5.5, 334.0], [5.6, 334.0], [5.7, 334.0], [5.8, 334.0], [5.9, 334.0], [6.0, 336.0], [6.1, 336.0], [6.2, 336.0], [6.3, 336.0], [6.4, 336.0], [6.5, 336.0], [6.6, 336.0], [6.7, 336.0], [6.8, 336.0], [6.9, 336.0], [7.0, 338.0], [7.1, 338.0], [7.2, 338.0], [7.3, 338.0], [7.4, 338.0], [7.5, 338.0], [7.6, 338.0], [7.7, 338.0], [7.8, 338.0], [7.9, 338.0], [8.0, 339.0], [8.1, 339.0], [8.2, 339.0], [8.3, 339.0], [8.4, 339.0], [8.5, 339.0], [8.6, 339.0], [8.7, 339.0], [8.8, 339.0], [8.9, 339.0], [9.0, 339.0], [9.1, 339.0], [9.2, 339.0], [9.3, 339.0], [9.4, 339.0], [9.5, 339.0], [9.6, 339.0], [9.7, 339.0], [9.8, 339.0], [9.9, 339.0], [10.0, 339.0], [10.1, 339.0], [10.2, 339.0], [10.3, 339.0], [10.4, 339.0], [10.5, 339.0], [10.6, 339.0], [10.7, 339.0], [10.8, 339.0], [10.9, 339.0], [11.0, 339.0], [11.1, 339.0], [11.2, 339.0], [11.3, 339.0], [11.4, 339.0], [11.5, 339.0], [11.6, 339.0], [11.7, 339.0], [11.8, 339.0], [11.9, 339.0], [12.0, 341.0], [12.1, 341.0], [12.2, 341.0], [12.3, 341.0], [12.4, 341.0], [12.5, 341.0], [12.6, 341.0], [12.7, 341.0], [12.8, 341.0], [12.9, 341.0], [13.0, 344.0], [13.1, 344.0], [13.2, 344.0], [13.3, 344.0], [13.4, 344.0], [13.5, 344.0], [13.6, 344.0], [13.7, 344.0], [13.8, 344.0], [13.9, 344.0], [14.0, 344.0], [14.1, 344.0], [14.2, 344.0], [14.3, 344.0], [14.4, 344.0], [14.5, 344.0], [14.6, 344.0], [14.7, 344.0], [14.8, 344.0], [14.9, 344.0], [15.0, 346.0], [15.1, 346.0], [15.2, 346.0], [15.3, 346.0], [15.4, 346.0], [15.5, 346.0], [15.6, 346.0], [15.7, 346.0], [15.8, 346.0], [15.9, 346.0], [16.0, 346.0], [16.1, 346.0], [16.2, 346.0], [16.3, 346.0], [16.4, 346.0], [16.5, 346.0], [16.6, 346.0], [16.7, 346.0], [16.8, 346.0], [16.9, 346.0], [17.0, 347.0], [17.1, 347.0], [17.2, 347.0], [17.3, 347.0], [17.4, 347.0], [17.5, 347.0], [17.6, 347.0], [17.7, 347.0], [17.8, 347.0], [17.9, 347.0], [18.0, 348.0], [18.1, 348.0], [18.2, 348.0], [18.3, 348.0], [18.4, 348.0], [18.5, 348.0], [18.6, 348.0], [18.7, 348.0], [18.8, 348.0], [18.9, 348.0], [19.0, 349.0], [19.1, 349.0], [19.2, 349.0], [19.3, 349.0], [19.4, 349.0], [19.5, 349.0], [19.6, 349.0], [19.7, 349.0], [19.8, 349.0], [19.9, 349.0], [20.0, 352.0], [20.1, 352.0], [20.2, 352.0], [20.3, 352.0], [20.4, 352.0], [20.5, 352.0], [20.6, 352.0], [20.7, 352.0], [20.8, 352.0], [20.9, 352.0], [21.0, 353.0], [21.1, 353.0], [21.2, 353.0], [21.3, 353.0], [21.4, 353.0], [21.5, 353.0], [21.6, 353.0], [21.7, 353.0], [21.8, 353.0], [21.9, 353.0], [22.0, 356.0], [22.1, 356.0], [22.2, 356.0], [22.3, 356.0], [22.4, 356.0], [22.5, 356.0], [22.6, 356.0], [22.7, 356.0], [22.8, 356.0], [22.9, 356.0], [23.0, 356.0], [23.1, 356.0], [23.2, 356.0], [23.3, 356.0], [23.4, 356.0], [23.5, 356.0], [23.6, 356.0], [23.7, 356.0], [23.8, 356.0], [23.9, 356.0], [24.0, 357.0], [24.1, 357.0], [24.2, 357.0], [24.3, 357.0], [24.4, 357.0], [24.5, 357.0], [24.6, 357.0], [24.7, 357.0], [24.8, 357.0], [24.9, 357.0], [25.0, 358.0], [25.1, 358.0], [25.2, 358.0], [25.3, 358.0], [25.4, 358.0], [25.5, 358.0], [25.6, 358.0], [25.7, 358.0], [25.8, 358.0], [25.9, 358.0], [26.0, 362.0], [26.1, 362.0], [26.2, 362.0], [26.3, 362.0], [26.4, 362.0], [26.5, 362.0], [26.6, 362.0], [26.7, 362.0], [26.8, 362.0], [26.9, 362.0], [27.0, 366.0], [27.1, 366.0], [27.2, 366.0], [27.3, 366.0], [27.4, 366.0], [27.5, 366.0], [27.6, 366.0], [27.7, 366.0], [27.8, 366.0], [27.9, 366.0], [28.0, 369.0], [28.1, 369.0], [28.2, 369.0], [28.3, 369.0], [28.4, 369.0], [28.5, 369.0], [28.6, 369.0], [28.7, 369.0], [28.8, 369.0], [28.9, 369.0], [29.0, 372.0], [29.1, 372.0], [29.2, 372.0], [29.3, 372.0], [29.4, 372.0], [29.5, 372.0], [29.6, 372.0], [29.7, 372.0], [29.8, 372.0], [29.9, 372.0], [30.0, 372.0], [30.1, 372.0], [30.2, 372.0], [30.3, 372.0], [30.4, 372.0], [30.5, 372.0], [30.6, 372.0], [30.7, 372.0], [30.8, 372.0], [30.9, 372.0], [31.0, 373.0], [31.1, 373.0], [31.2, 373.0], [31.3, 373.0], [31.4, 373.0], [31.5, 373.0], [31.6, 373.0], [31.7, 373.0], [31.8, 373.0], [31.9, 373.0], [32.0, 374.0], [32.1, 374.0], [32.2, 374.0], [32.3, 374.0], [32.4, 374.0], [32.5, 374.0], [32.6, 374.0], [32.7, 374.0], [32.8, 374.0], [32.9, 374.0], [33.0, 377.0], [33.1, 377.0], [33.2, 377.0], [33.3, 377.0], [33.4, 377.0], [33.5, 377.0], [33.6, 377.0], [33.7, 377.0], [33.8, 377.0], [33.9, 377.0], [34.0, 377.0], [34.1, 377.0], [34.2, 377.0], [34.3, 377.0], [34.4, 377.0], [34.5, 377.0], [34.6, 377.0], [34.7, 377.0], [34.8, 377.0], [34.9, 377.0], [35.0, 379.0], [35.1, 379.0], [35.2, 379.0], [35.3, 379.0], [35.4, 379.0], [35.5, 379.0], [35.6, 379.0], [35.7, 379.0], [35.8, 379.0], [35.9, 379.0], [36.0, 383.0], [36.1, 383.0], [36.2, 383.0], [36.3, 383.0], [36.4, 383.0], [36.5, 383.0], [36.6, 383.0], [36.7, 383.0], [36.8, 383.0], [36.9, 383.0], [37.0, 383.0], [37.1, 383.0], [37.2, 383.0], [37.3, 383.0], [37.4, 383.0], [37.5, 383.0], [37.6, 383.0], [37.7, 383.0], [37.8, 383.0], [37.9, 383.0], [38.0, 386.0], [38.1, 386.0], [38.2, 386.0], [38.3, 386.0], [38.4, 386.0], [38.5, 386.0], [38.6, 386.0], [38.7, 386.0], [38.8, 386.0], [38.9, 386.0], [39.0, 388.0], [39.1, 388.0], [39.2, 388.0], [39.3, 388.0], [39.4, 388.0], [39.5, 388.0], [39.6, 388.0], [39.7, 388.0], [39.8, 388.0], [39.9, 388.0], [40.0, 392.0], [40.1, 392.0], [40.2, 392.0], [40.3, 392.0], [40.4, 392.0], [40.5, 392.0], [40.6, 392.0], [40.7, 392.0], [40.8, 392.0], [40.9, 392.0], [41.0, 394.0], [41.1, 394.0], [41.2, 394.0], [41.3, 394.0], [41.4, 394.0], [41.5, 394.0], [41.6, 394.0], [41.7, 394.0], [41.8, 394.0], [41.9, 394.0], [42.0, 397.0], [42.1, 397.0], [42.2, 397.0], [42.3, 397.0], [42.4, 397.0], [42.5, 397.0], [42.6, 397.0], [42.7, 397.0], [42.8, 397.0], [42.9, 397.0], [43.0, 399.0], [43.1, 399.0], [43.2, 399.0], [43.3, 399.0], [43.4, 399.0], [43.5, 399.0], [43.6, 399.0], [43.7, 399.0], [43.8, 399.0], [43.9, 399.0], [44.0, 401.0], [44.1, 401.0], [44.2, 401.0], [44.3, 401.0], [44.4, 401.0], [44.5, 401.0], [44.6, 401.0], [44.7, 401.0], [44.8, 401.0], [44.9, 401.0], [45.0, 404.0], [45.1, 404.0], [45.2, 404.0], [45.3, 404.0], [45.4, 404.0], [45.5, 404.0], [45.6, 404.0], [45.7, 404.0], [45.8, 404.0], [45.9, 404.0], [46.0, 405.0], [46.1, 405.0], [46.2, 405.0], [46.3, 405.0], [46.4, 405.0], [46.5, 405.0], [46.6, 405.0], [46.7, 405.0], [46.8, 405.0], [46.9, 405.0], [47.0, 406.0], [47.1, 406.0], [47.2, 406.0], [47.3, 406.0], [47.4, 406.0], [47.5, 406.0], [47.6, 406.0], [47.7, 406.0], [47.8, 406.0], [47.9, 406.0], [48.0, 409.0], [48.1, 409.0], [48.2, 409.0], [48.3, 409.0], [48.4, 409.0], [48.5, 409.0], [48.6, 409.0], [48.7, 409.0], [48.8, 409.0], [48.9, 409.0], [49.0, 413.0], [49.1, 413.0], [49.2, 413.0], [49.3, 413.0], [49.4, 413.0], [49.5, 413.0], [49.6, 413.0], [49.7, 413.0], [49.8, 413.0], [49.9, 413.0], [50.0, 413.0], [50.1, 413.0], [50.2, 413.0], [50.3, 413.0], [50.4, 413.0], [50.5, 413.0], [50.6, 413.0], [50.7, 413.0], [50.8, 413.0], [50.9, 413.0], [51.0, 414.0], [51.1, 414.0], [51.2, 414.0], [51.3, 414.0], [51.4, 414.0], [51.5, 414.0], [51.6, 414.0], [51.7, 414.0], [51.8, 414.0], [51.9, 414.0], [52.0, 416.0], [52.1, 416.0], [52.2, 416.0], [52.3, 416.0], [52.4, 416.0], [52.5, 416.0], [52.6, 416.0], [52.7, 416.0], [52.8, 416.0], [52.9, 416.0], [53.0, 418.0], [53.1, 418.0], [53.2, 418.0], [53.3, 418.0], [53.4, 418.0], [53.5, 418.0], [53.6, 418.0], [53.7, 418.0], [53.8, 418.0], [53.9, 418.0], [54.0, 418.0], [54.1, 418.0], [54.2, 418.0], [54.3, 418.0], [54.4, 418.0], [54.5, 418.0], [54.6, 418.0], [54.7, 418.0], [54.8, 418.0], [54.9, 418.0], [55.0, 421.0], [55.1, 421.0], [55.2, 421.0], [55.3, 421.0], [55.4, 421.0], [55.5, 421.0], [55.6, 421.0], [55.7, 421.0], [55.8, 421.0], [55.9, 421.0], [56.0, 421.0], [56.1, 421.0], [56.2, 421.0], [56.3, 421.0], [56.4, 421.0], [56.5, 421.0], [56.6, 421.0], [56.7, 421.0], [56.8, 421.0], [56.9, 421.0], [57.0, 421.0], [57.1, 421.0], [57.2, 421.0], [57.3, 421.0], [57.4, 421.0], [57.5, 421.0], [57.6, 421.0], [57.7, 421.0], [57.8, 421.0], [57.9, 421.0], [58.0, 429.0], [58.1, 429.0], [58.2, 429.0], [58.3, 429.0], [58.4, 429.0], [58.5, 429.0], [58.6, 429.0], [58.7, 429.0], [58.8, 429.0], [58.9, 429.0], [59.0, 429.0], [59.1, 429.0], [59.2, 429.0], [59.3, 429.0], [59.4, 429.0], [59.5, 429.0], [59.6, 429.0], [59.7, 429.0], [59.8, 429.0], [59.9, 429.0], [60.0, 433.0], [60.1, 433.0], [60.2, 433.0], [60.3, 433.0], [60.4, 433.0], [60.5, 433.0], [60.6, 433.0], [60.7, 433.0], [60.8, 433.0], [60.9, 433.0], [61.0, 433.0], [61.1, 433.0], [61.2, 433.0], [61.3, 433.0], [61.4, 433.0], [61.5, 433.0], [61.6, 433.0], [61.7, 433.0], [61.8, 433.0], [61.9, 433.0], [62.0, 445.0], [62.1, 445.0], [62.2, 445.0], [62.3, 445.0], [62.4, 445.0], [62.5, 445.0], [62.6, 445.0], [62.7, 445.0], [62.8, 445.0], [62.9, 445.0], [63.0, 454.0], [63.1, 454.0], [63.2, 454.0], [63.3, 454.0], [63.4, 454.0], [63.5, 454.0], [63.6, 454.0], [63.7, 454.0], [63.8, 454.0], [63.9, 454.0], [64.0, 455.0], [64.1, 455.0], [64.2, 455.0], [64.3, 455.0], [64.4, 455.0], [64.5, 455.0], [64.6, 455.0], [64.7, 455.0], [64.8, 455.0], [64.9, 455.0], [65.0, 467.0], [65.1, 467.0], [65.2, 467.0], [65.3, 467.0], [65.4, 467.0], [65.5, 467.0], [65.6, 467.0], [65.7, 467.0], [65.8, 467.0], [65.9, 467.0], [66.0, 469.0], [66.1, 469.0], [66.2, 469.0], [66.3, 469.0], [66.4, 469.0], [66.5, 469.0], [66.6, 469.0], [66.7, 469.0], [66.8, 469.0], [66.9, 469.0], [67.0, 477.0], [67.1, 477.0], [67.2, 477.0], [67.3, 477.0], [67.4, 477.0], [67.5, 477.0], [67.6, 477.0], [67.7, 477.0], [67.8, 477.0], [67.9, 477.0], [68.0, 481.0], [68.1, 481.0], [68.2, 481.0], [68.3, 481.0], [68.4, 481.0], [68.5, 481.0], [68.6, 481.0], [68.7, 481.0], [68.8, 481.0], [68.9, 481.0], [69.0, 484.0], [69.1, 484.0], [69.2, 484.0], [69.3, 484.0], [69.4, 484.0], [69.5, 484.0], [69.6, 484.0], [69.7, 484.0], [69.8, 484.0], [69.9, 484.0], [70.0, 487.0], [70.1, 487.0], [70.2, 487.0], [70.3, 487.0], [70.4, 487.0], [70.5, 487.0], [70.6, 487.0], [70.7, 487.0], [70.8, 487.0], [70.9, 487.0], [71.0, 488.0], [71.1, 488.0], [71.2, 488.0], [71.3, 488.0], [71.4, 488.0], [71.5, 488.0], [71.6, 488.0], [71.7, 488.0], [71.8, 488.0], [71.9, 488.0], [72.0, 488.0], [72.1, 488.0], [72.2, 488.0], [72.3, 488.0], [72.4, 488.0], [72.5, 488.0], [72.6, 488.0], [72.7, 488.0], [72.8, 488.0], [72.9, 488.0], [73.0, 489.0], [73.1, 489.0], [73.2, 489.0], [73.3, 489.0], [73.4, 489.0], [73.5, 489.0], [73.6, 489.0], [73.7, 489.0], [73.8, 489.0], [73.9, 489.0], [74.0, 493.0], [74.1, 493.0], [74.2, 493.0], [74.3, 493.0], [74.4, 493.0], [74.5, 493.0], [74.6, 493.0], [74.7, 493.0], [74.8, 493.0], [74.9, 493.0], [75.0, 497.0], [75.1, 497.0], [75.2, 497.0], [75.3, 497.0], [75.4, 497.0], [75.5, 497.0], [75.6, 497.0], [75.7, 497.0], [75.8, 497.0], [75.9, 497.0], [76.0, 499.0], [76.1, 499.0], [76.2, 499.0], [76.3, 499.0], [76.4, 499.0], [76.5, 499.0], [76.6, 499.0], [76.7, 499.0], [76.8, 499.0], [76.9, 499.0], [77.0, 500.0], [77.1, 500.0], [77.2, 500.0], [77.3, 500.0], [77.4, 500.0], [77.5, 500.0], [77.6, 500.0], [77.7, 500.0], [77.8, 500.0], [77.9, 500.0], [78.0, 503.0], [78.1, 503.0], [78.2, 503.0], [78.3, 503.0], [78.4, 503.0], [78.5, 503.0], [78.6, 503.0], [78.7, 503.0], [78.8, 503.0], [78.9, 503.0], [79.0, 503.0], [79.1, 503.0], [79.2, 503.0], [79.3, 503.0], [79.4, 503.0], [79.5, 503.0], [79.6, 503.0], [79.7, 503.0], [79.8, 503.0], [79.9, 503.0], [80.0, 512.0], [80.1, 512.0], [80.2, 512.0], [80.3, 512.0], [80.4, 512.0], [80.5, 512.0], [80.6, 512.0], [80.7, 512.0], [80.8, 512.0], [80.9, 512.0], [81.0, 515.0], [81.1, 515.0], [81.2, 515.0], [81.3, 515.0], [81.4, 515.0], [81.5, 515.0], [81.6, 515.0], [81.7, 515.0], [81.8, 515.0], [81.9, 515.0], [82.0, 515.0], [82.1, 515.0], [82.2, 515.0], [82.3, 515.0], [82.4, 515.0], [82.5, 515.0], [82.6, 515.0], [82.7, 515.0], [82.8, 515.0], [82.9, 515.0], [83.0, 516.0], [83.1, 516.0], [83.2, 516.0], [83.3, 516.0], [83.4, 516.0], [83.5, 516.0], [83.6, 516.0], [83.7, 516.0], [83.8, 516.0], [83.9, 516.0], [84.0, 517.0], [84.1, 517.0], [84.2, 517.0], [84.3, 517.0], [84.4, 517.0], [84.5, 517.0], [84.6, 517.0], [84.7, 517.0], [84.8, 517.0], [84.9, 517.0], [85.0, 521.0], [85.1, 521.0], [85.2, 521.0], [85.3, 521.0], [85.4, 521.0], [85.5, 521.0], [85.6, 521.0], [85.7, 521.0], [85.8, 521.0], [85.9, 521.0], [86.0, 526.0], [86.1, 526.0], [86.2, 526.0], [86.3, 526.0], [86.4, 526.0], [86.5, 526.0], [86.6, 526.0], [86.7, 526.0], [86.8, 526.0], [86.9, 526.0], [87.0, 530.0], [87.1, 530.0], [87.2, 530.0], [87.3, 530.0], [87.4, 530.0], [87.5, 530.0], [87.6, 530.0], [87.7, 530.0], [87.8, 530.0], [87.9, 530.0], [88.0, 531.0], [88.1, 531.0], [88.2, 531.0], [88.3, 531.0], [88.4, 531.0], [88.5, 531.0], [88.6, 531.0], [88.7, 531.0], [88.8, 531.0], [88.9, 531.0], [89.0, 537.0], [89.1, 537.0], [89.2, 537.0], [89.3, 537.0], [89.4, 537.0], [89.5, 537.0], [89.6, 537.0], [89.7, 537.0], [89.8, 537.0], [89.9, 537.0], [90.0, 541.0], [90.1, 541.0], [90.2, 541.0], [90.3, 541.0], [90.4, 541.0], [90.5, 541.0], [90.6, 541.0], [90.7, 541.0], [90.8, 541.0], [90.9, 541.0], [91.0, 541.0], [91.1, 541.0], [91.2, 541.0], [91.3, 541.0], [91.4, 541.0], [91.5, 541.0], [91.6, 541.0], [91.7, 541.0], [91.8, 541.0], [91.9, 541.0], [92.0, 546.0], [92.1, 546.0], [92.2, 546.0], [92.3, 546.0], [92.4, 546.0], [92.5, 546.0], [92.6, 546.0], [92.7, 546.0], [92.8, 546.0], [92.9, 546.0], [93.0, 546.0], [93.1, 546.0], [93.2, 546.0], [93.3, 546.0], [93.4, 546.0], [93.5, 546.0], [93.6, 546.0], [93.7, 546.0], [93.8, 546.0], [93.9, 546.0], [94.0, 549.0], [94.1, 549.0], [94.2, 549.0], [94.3, 549.0], [94.4, 549.0], [94.5, 549.0], [94.6, 549.0], [94.7, 549.0], [94.8, 549.0], [94.9, 549.0], [95.0, 550.0], [95.1, 550.0], [95.2, 550.0], [95.3, 550.0], [95.4, 550.0], [95.5, 550.0], [95.6, 550.0], [95.7, 550.0], [95.8, 550.0], [95.9, 550.0], [96.0, 551.0], [96.1, 551.0], [96.2, 551.0], [96.3, 551.0], [96.4, 551.0], [96.5, 551.0], [96.6, 551.0], [96.7, 551.0], [96.8, 551.0], [96.9, 551.0], [97.0, 561.0], [97.1, 561.0], [97.2, 561.0], [97.3, 561.0], [97.4, 561.0], [97.5, 561.0], [97.6, 561.0], [97.7, 561.0], [97.8, 561.0], [97.9, 561.0], [98.0, 564.0], [98.1, 564.0], [98.2, 564.0], [98.3, 564.0], [98.4, 564.0], [98.5, 564.0], [98.6, 564.0], [98.7, 564.0], [98.8, 564.0], [98.9, 564.0], [99.0, 565.0], [99.1, 565.0], [99.2, 565.0], [99.3, 565.0], [99.4, 565.0], [99.5, 565.0], [99.6, 565.0], [99.7, 565.0], [99.8, 565.0], [99.9, 565.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 200.0, "maxY": 41.0, "series": [{"data": [[300.0, 41.0], [200.0, 3.0], [400.0, 33.0], [500.0, 23.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 22.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 78.0, "series": [{"data": [[0.0, 78.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 22.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 32.150000000000006, "minX": 1.73220024E12, "maxY": 32.150000000000006, "series": [{"data": [[1.73220024E12, 32.150000000000006]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73220024E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 339.0, "minX": 1.0, "maxY": 565.0, "series": [{"data": [[32.0, 454.0], [35.0, 413.0], [34.0, 417.0], [37.0, 376.0], [36.0, 367.4], [38.0, 379.68750000000006], [39.0, 417.8333333333333], [40.0, 377.0], [41.0, 345.75], [42.0, 408.33333333333337], [43.0, 453.0], [45.0, 455.0], [44.0, 503.0], [47.0, 339.0], [46.0, 412.5], [3.0, 495.0], [4.0, 531.0], [5.0, 521.0], [6.0, 546.0], [7.0, 549.0], [8.0, 481.0], [9.0, 515.0], [10.0, 561.0], [11.0, 467.0], [12.0, 565.0], [13.0, 516.0], [14.0, 488.0], [16.0, 509.5], [1.0, 526.0], [17.0, 484.0], [19.0, 515.0], [20.0, 512.0], [21.0, 541.0], [22.0, 499.0], [23.0, 515.0], [25.0, 548.5], [26.0, 433.0], [27.0, 399.0], [28.0, 433.0], [29.0, 397.0], [30.0, 429.0], [31.0, 383.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[32.150000000000006, 424.6299999999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 47.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 201.66666666666666, "minX": 1.73220024E12, "maxY": 403549.2833333333, "series": [{"data": [[1.73220024E12, 403549.2833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.73220024E12, 201.66666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73220024E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 424.6299999999999, "minX": 1.73220024E12, "maxY": 424.6299999999999, "series": [{"data": [[1.73220024E12, 424.6299999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73220024E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 196.88999999999996, "minX": 1.73220024E12, "maxY": 196.88999999999996, "series": [{"data": [[1.73220024E12, 196.88999999999996]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73220024E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 96.84999999999998, "minX": 1.73220024E12, "maxY": 96.84999999999998, "series": [{"data": [[1.73220024E12, 96.84999999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73220024E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 254.0, "minX": 1.73220024E12, "maxY": 565.0, "series": [{"data": [[1.73220024E12, 565.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.73220024E12, 254.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.73220024E12, 540.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.73220024E12, 564.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.73220024E12, 413.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.73220024E12, 549.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73220024E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 369.0, "minX": 45.0, "maxY": 484.0, "series": [{"data": [[45.0, 484.0], [55.0, 369.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 181.0, "minX": 45.0, "maxY": 196.0, "series": [{"data": [[45.0, 196.0], [55.0, 181.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.73220024E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.73220024E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73220024E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.73220024E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.73220024E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73220024E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.73220024E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.73220024E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73220024E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.73220024E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.73220024E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73220024E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

