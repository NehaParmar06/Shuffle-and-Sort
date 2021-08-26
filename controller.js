var arr = [
    {
        customID: 1,
        customClassName: "basicCard card1",
        customInnerHTML: "<span>1</span>"
    },
    {
        customID: 2,
        customClassName: "basicCard card2",
        customInnerHTML: "<span>2</span>"
    },
    {
        customID: 3,
        customClassName: "basicCard card3",
        customInnerHTML: "<span>3</span>"
    },
    {
        customID: 4,
        customClassName: "basicCard card4",
        customInnerHTML: "<span>4</span>"
    },
    {
        customID: 5,
        customClassName: "basicCard card5",
        customInnerHTML: "<span>5</span>"
    },
    {
        customID: 6,
        customClassName: "basicCard card6",
        customInnerHTML: "<span>6</span>"
    },
    {
        customID: 7,
        customClassName: "basicCard card7",
        customInnerHTML: "<span>7</span>"
    },
    {
        customID: 8,
        customClassName: "basicCard card8",
        customInnerHTML: "<span>8</span>"
    },
    {
        customID: 9,
        customClassName: "basicCard card9",
        customInnerHTML: "<span>9</span>"
    }
];

const rearrange = () => {
    for (let i = 0; i < arr.length; i++) {
        var div = document.createElement('div');
        div.innerHTML = arr[i].customInnerHTML;
        div.className = arr[i].customClassName;

        document.getElementsByClassName("inner")[0].appendChild(div);
    }
}
for (let i = 0; i < arr.length; i++) {
    document.addEventListener('DOMContentLoaded', function () {
        var div = document.createElement('div');
        div.innerHTML = arr[i].customInnerHTML;
        div.className = arr[i].customClassName;

        document.getElementsByClassName("inner")[0].appendChild(div);
    }, false);

}

shuffle = () => {
    for (var i = arr.length - 1; i > 0; i--) {
        var x = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[x]] = [arr[x], arr[i]];
    }
    console.log(arr);

    document.getElementsByClassName("inner")[0].innerHTML = '';
    rearrange();
}

sort = () => {
    arr.sort(function (a, b) {
        if (a.customID < b.customID) return -1;
        if (a.customID > b.customID) return 1;
        return 0;
    });
    document.getElementsByClassName("inner")[0].innerHTML = '';
    rearrange();
}