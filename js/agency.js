(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: $('#mainNav').height()
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $("#logo-image").attr('src', './img/SmallLogo.png');
            $(".navbar-toggler i").css('font-size', '1.5em');
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $("#logo-image").attr('src', './img/SmallLogoWhite.png');
            $(".navbar-toggler i").css('font-size', '2em');
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function (e) {
        $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal', function (e) {
        $(".navbar").removeClass("d-none");
    });

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 400) {
            $('ul.timeline>li').addClass('lightSpeedIn animated');
        }
    });


    // backgrounds to slider
    $('.carousel-item').each( function(index, element) {
        element = $(element);
        var bgPos = element.attr('data-bg-pos');
        var bg = element.attr('data-bg');

        element.css('background-image', 'url("'+bg+'")');

        if (bgPos !== undefined) {
            element.css('background-position', bgPos);
        }
    });

    // Datatables
    $('.dataTable').DataTable({
        language: {
            search: "Buscar ",
            paginate: {
                next: 'Sig',
                previous: 'Prev'
            },
            infoEmpty: 'Viendo 0 de 0 registros',
            emptyTable: 'No hay registros en la tabla',
            info: "<em><small>Mostrando _START_ a _END_ de _TOTAL_ registros</small></em>",
            lengthMenu: "Ver _MENU_ registros"
        }
    });

    $('.filter .table').DataTable();

    $('.buttons .table').DataTable({
        dom: 'Bflrtp',
        buttons: [
            {
                extend: 'copy',
                'text': 'Copiar'

            },
            'pdf',
            'excel'
        ],
        language: {

            search: "Buscar ",
            paginate: {
                next: 'Sig',
                previous: 'Prev'
            },
            infoEmpty: 'Viendo 0 de 0 registros',
            emptyTable: 'No hay registros en la tabla',
            info: "<em><small>Mostrando _START_ a _END_ de _TOTAL_ registros</small></em>",
            lengthMenu: "Ver _MENU_ registros"
        }
    });

    // Editable Table
    // var dataSet = [
    var  data = [
        {
            "id": "1",
            "first_name": "Tiger",
            "last_name": "Nixon",
            "position": "System Architect",
            "email": "t.nixon@datatables.net",
            "office": "Edinburgh",
            "extn": "5421",
            "age": "61",
            "salary": "320800",
            "start_date": "2011-04-25"
        },
        {
            "id": "2",
            "first_name": "Garrett",
            "last_name": "Winters",
            "position": "Accountant",
            "email": "g.winters@datatables.net",
            "office": "Tokyo",
            "extn": "8422",
            "age": "63",
            "salary": "170750",
            "start_date": "2011-07-25"
        },
        {
            "id": "3",
            "first_name": "Ashton",
            "last_name": "Cox",
            "position": "Junior Technical Author",
            "email": "a.cox@datatables.net",
            "office": "San Francisco",
            "extn": "1562",
            "age": "66",
            "salary": "86000",
            "start_date": "2009-01-12"
        },
        {
            "id": "4",
            "first_name": "Cedric",
            "last_name": "Kelly",
            "position": "Senior Javascript Developer",
            "email": "c.kelly@datatables.net",
            "office": "Edinburgh",
            "extn": "6224",
            "age": "22",
            "salary": "433060",
            "start_date": "2012-03-29"
        },
        {
            "id": "5",
            "first_name": "Airi",
            "last_name": "Satou",
            "position": "Accountant",
            "email": "a.satou@datatables.net",
            "office": "Tokyo",
            "extn": "5407",
            "age": "33",
            "salary": "162700",
            "start_date": "2008-11-28"
        },
        {
            "id": "6",
            "first_name": "Brielle",
            "last_name": "Williamson",
            "position": "Integration Specialist",
            "email": "b.williamson@datatables.net",
            "office": "New York",
            "extn": "4804",
            "age": "61",
            "salary": "372000",
            "start_date": "2012-12-02"
        },
        {
            "id": "7",
            "first_name": "Herrod",
            "last_name": "Chandler",
            "position": "Sales Assistant",
            "email": "h.chandler@datatables.net",
            "office": "San Francisco",
            "extn": "9608",
            "age": "59",
            "salary": "137500",
            "start_date": "2012-08-06"
        },
        {
            "id": "8",
            "first_name": "Rhona",
            "last_name": "Davidson",
            "position": "Integration Specialist",
            "email": "r.davidson@datatables.net",
            "office": "Tokyo",
            "extn": "6200",
            "age": "55",
            "salary": "327900",
            "start_date": "2010-10-14"
        },
        {
            "id": "9",
            "first_name": "Colleen",
            "last_name": "Hurst",
            "position": "Javascript Developer",
            "email": "c.hurst@datatables.net",
            "office": "San Francisco",
            "extn": "2360",
            "age": "39",
            "salary": "205500",
            "start_date": "2009-09-15"
        },
        {
            "id": "10",
            "first_name": "Sonya",
            "last_name": "Frost",
            "position": "Software Engineer",
            "email": "s.frost@datatables.net",
            "office": "Edinburgh",
            "extn": "1667",
            "age": "23",
            "salary": "103600",
            "start_date": "2008-12-13"
        },
        {
            "id": "11",
            "first_name": "Jena",
            "last_name": "Gaines",
            "position": "Office Manager",
            "email": "j.gaines@datatables.net",
            "office": "London",
            "extn": "3814",
            "age": "30",
            "salary": "90560",
            "start_date": "2008-12-19"
        },
        {
            "id": "12",
            "first_name": "Quinn",
            "last_name": "Flynn",
            "position": "Support Lead",
            "email": "q.flynn@datatables.net",
            "office": "Edinburgh",
            "extn": "9497",
            "age": "22",
            "salary": "342000",
            "start_date": "2013-03-03"
        },
        {
            "id": "13",
            "first_name": "Charde",
            "last_name": "Marshall",
            "position": "Regional Director",
            "email": "c.marshall@datatables.net",
            "office": "San Francisco",
            "extn": "6741",
            "age": "36",
            "salary": "470600",
            "start_date": "2008-10-16"
        },
        {
            "id": "14",
            "first_name": "Haley",
            "last_name": "Kennedy",
            "position": "Senior Marketing Designer",
            "email": "h.kennedy@datatables.net",
            "office": "London",
            "extn": "3597",
            "age": "43",
            "salary": "313500",
            "start_date": "2012-12-18"
        },
        {
            "id": "15",
            "first_name": "Tatyana",
            "last_name": "Fitzpatrick",
            "position": "Regional Director",
            "email": "t.fitzpatrick@datatables.net",
            "office": "London",
            "extn": "1965",
            "age": "19",
            "salary": "385750",
            "start_date": "2010-03-17"
        },
        {
            "id": "16",
            "first_name": "Michael",
            "last_name": "Silva",
            "position": "Marketing Designer",
            "email": "m.silva@datatables.net",
            "office": "London",
            "extn": "1581",
            "age": "66",
            "salary": "198500",
            "start_date": "2012-11-27"
        },
        {
            "id": "17",
            "first_name": "Paul",
            "last_name": "Byrd",
            "position": "Chief Financial Officer (CFO)",
            "email": "p.byrd@datatables.net",
            "office": "New York",
            "extn": "3059",
            "age": "64",
            "salary": "725000",
            "start_date": "2010-06-09"
        },
        {
            "id": "18",
            "first_name": "Gloria",
            "last_name": "Little",
            "position": "Systems Administrator",
            "email": "g.little@datatables.net",
            "office": "New York",
            "extn": "1721",
            "age": "59",
            "salary": "237500",
            "start_date": "2009-04-10"
        },
        {
            "id": "19",
            "first_name": "Bradley",
            "last_name": "Greer",
            "position": "Software Engineer",
            "email": "b.greer@datatables.net",
            "office": "London",
            "extn": "2558",
            "age": "41",
            "salary": "132000",
            "start_date": "2012-10-13"
        },
        {
            "id": "20",
            "first_name": "Dai",
            "last_name": "Rios",
            "position": "Personnel Lead",
            "email": "d.rios@datatables.net",
            "office": "Edinburgh",
            "extn": "2290",
            "age": "35",
            "salary": "217500",
            "start_date": "2012-09-26"
        },
        {
            "id": "21",
            "first_name": "Jenette",
            "last_name": "Caldwell",
            "position": "Development Lead",
            "email": "j.caldwell@datatables.net",
            "office": "New York",
            "extn": "1937",
            "age": "30",
            "salary": "345000",
            "start_date": "2011-09-03"
        },
        {
            "id": "22",
            "first_name": "Yuri",
            "last_name": "Berry",
            "position": "Chief Marketing Officer (CMO)",
            "email": "y.berry@datatables.net",
            "office": "New York",
            "extn": "6154",
            "age": "40",
            "salary": "675000",
            "start_date": "2009-06-25"
        },
        {
            "id": "23",
            "first_name": "Caesar",
            "last_name": "Vance",
            "position": "Pre-Sales Support",
            "email": "c.vance@datatables.net",
            "office": "New York",
            "extn": "8330",
            "age": "21",
            "salary": "106450",
            "start_date": "2011-12-12"
        },
        {
            "id": "24",
            "first_name": "Doris",
            "last_name": "Wilder",
            "position": "Sales Assistant",
            "email": "d.wilder@datatables.net",
            "office": "Sidney",
            "extn": "3023",
            "age": "23",
            "salary": "85600",
            "start_date": "2010-09-20"
        },
        {
            "id": "25",
            "first_name": "Angelica",
            "last_name": "Ramos",
            "position": "Chief Executive Officer (CEO)",
            "email": "a.ramos@datatables.net",
            "office": "London",
            "extn": "5797",
            "age": "47",
            "salary": "1200000",
            "start_date": "2009-10-09"
        },
        {
            "id": "26",
            "first_name": "Gavin",
            "last_name": "Joyce",
            "position": "Developer",
            "email": "g.joyce@datatables.net",
            "office": "Edinburgh",
            "extn": "8822",
            "age": "42",
            "salary": "92575",
            "start_date": "2010-12-22"
        },
        {
            "id": "27",
            "first_name": "Jennifer",
            "last_name": "Chang",
            "position": "Regional Director",
            "email": "j.chang@datatables.net",
            "office": "Singapore",
            "extn": "9239",
            "age": "28",
            "salary": "357650",
            "start_date": "2010-11-14"
        },
        {
            "id": "28",
            "first_name": "Brenden",
            "last_name": "Wagner",
            "position": "Software Engineer",
            "email": "b.wagner@datatables.net",
            "office": "San Francisco",
            "extn": "1314",
            "age": "28",
            "salary": "206850",
            "start_date": "2011-06-07"
        },
        {
            "id": "29",
            "first_name": "Fiona",
            "last_name": "Green",
            "position": "Chief Operating Officer (COO)",
            "email": "f.green@datatables.net",
            "office": "San Francisco",
            "extn": "2947",
            "age": "48",
            "salary": "850000",
            "start_date": "2010-03-11"
        },
        {
            "id": "30",
            "first_name": "Shou",
            "last_name": "Itou",
            "position": "Regional Marketing",
            "email": "s.itou@datatables.net",
            "office": "Tokyo",
            "extn": "8899",
            "age": "20",
            "salary": "163000",
            "start_date": "2011-08-14"
        },
        {
            "id": "31",
            "first_name": "Michelle",
            "last_name": "House",
            "position": "Integration Specialist",
            "email": "m.house@datatables.net",
            "office": "Sidney",
            "extn": "2769",
            "age": "37",
            "salary": "95400",
            "start_date": "2011-06-02"
        },
        {
            "id": "32",
            "first_name": "Suki",
            "last_name": "Burks",
            "position": "Developer",
            "email": "s.burks@datatables.net",
            "office": "London",
            "extn": "6832",
            "age": "53",
            "salary": "114500",
            "start_date": "2009-10-22"
        },
        {
            "id": "33",
            "first_name": "Prescott",
            "last_name": "Bartlett",
            "position": "Technical Author",
            "email": "p.bartlett@datatables.net",
            "office": "London",
            "extn": "3606",
            "age": "27",
            "salary": "145000",
            "start_date": "2011-05-07"
        },
        {
            "id": "34",
            "first_name": "Gavin",
            "last_name": "Cortez",
            "position": "Team Leader",
            "email": "g.cortez@datatables.net",
            "office": "San Francisco",
            "extn": "2860",
            "age": "22",
            "salary": "235500",
            "start_date": "2008-10-26"
        },
        {
            "id": "35",
            "first_name": "Martena",
            "last_name": "Mccray",
            "position": "Post-Sales support",
            "email": "m.mccray@datatables.net",
            "office": "Edinburgh",
            "extn": "8240",
            "age": "46",
            "salary": "324050",
            "start_date": "2011-03-09"
        },
        {
            "id": "36",
            "first_name": "Unity",
            "last_name": "Butler",
            "position": "Marketing Designer",
            "email": "u.butler@datatables.net",
            "office": "San Francisco",
            "extn": "5384",
            "age": "47",
            "salary": "85675",
            "start_date": "2009-12-09"
        },
        {
            "id": "37",
            "first_name": "Howard",
            "last_name": "Hatfield",
            "position": "Office Manager",
            "email": "h.hatfield@datatables.net",
            "office": "San Francisco",
            "extn": "7031",
            "age": "51",
            "salary": "164500",
            "start_date": "2008-12-16"
        },
        {
            "id": "38",
            "first_name": "Hope",
            "last_name": "Fuentes",
            "position": "Secretary",
            "email": "h.fuentes@datatables.net",
            "office": "San Francisco",
            "extn": "6318",
            "age": "41",
            "salary": "109850",
            "start_date": "2010-02-12"
        },
        {
            "id": "39",
            "first_name": "Vivian",
            "last_name": "Harrell",
            "position": "Financial Controller",
            "email": "v.harrell@datatables.net",
            "office": "San Francisco",
            "extn": "9422",
            "age": "62",
            "salary": "452500",
            "start_date": "2009-02-14"
        },
        {
            "id": "40",
            "first_name": "Timothy",
            "last_name": "Mooney",
            "position": "Office Manager",
            "email": "t.mooney@datatables.net",
            "office": "London",
            "extn": "7580",
            "age": "37",
            "salary": "136200",
            "start_date": "2008-12-11"
        },
        {
            "id": "41",
            "first_name": "Jackson",
            "last_name": "Bradshaw",
            "position": "Director",
            "email": "j.bradshaw@datatables.net",
            "office": "New York",
            "extn": "1042",
            "age": "65",
            "salary": "645750",
            "start_date": "2008-09-26"
        },
        {
            "id": "42",
            "first_name": "Olivia",
            "last_name": "Liang",
            "position": "Support Engineer",
            "email": "o.liang@datatables.net",
            "office": "Singapore",
            "extn": "2120",
            "age": "64",
            "salary": "234500",
            "start_date": "2011-02-03"
        },
        {
            "id": "43",
            "first_name": "Bruno",
            "last_name": "Nash",
            "position": "Software Engineer",
            "email": "b.nash@datatables.net",
            "office": "London",
            "extn": "6222",
            "age": "38",
            "salary": "163500",
            "start_date": "2011-05-03"
        },
        {
            "id": "44",
            "first_name": "Sakura",
            "last_name": "Yamamoto",
            "position": "Support Engineer",
            "email": "s.yamamoto@datatables.net",
            "office": "Tokyo",
            "extn": "9383",
            "age": "37",
            "salary": "139575",
            "start_date": "2009-08-19"
        },
        {
            "id": "45",
            "first_name": "Thor",
            "last_name": "Walton",
            "position": "Developer",
            "email": "t.walton@datatables.net",
            "office": "New York",
            "extn": "8327",
            "age": "61",
            "salary": "98540",
            "start_date": "2013-08-11"
        },
        {
            "id": "46",
            "first_name": "Finn",
            "last_name": "Camacho",
            "position": "Support Engineer",
            "email": "f.camacho@datatables.net",
            "office": "San Francisco",
            "extn": "2927",
            "age": "47",
            "salary": "87500",
            "start_date": "2009-07-07"
        },
        {
            "id": "47",
            "first_name": "Serge",
            "last_name": "Baldwin",
            "position": "Data Coordinator",
            "email": "s.baldwin@datatables.net",
            "office": "Singapore",
            "extn": "8352",
            "age": "64",
            "salary": "138575",
            "start_date": "2012-04-09"
        },
        {
            "id": "48",
            "first_name": "Zenaida",
            "last_name": "Frank",
            "position": "Software Engineer",
            "email": "z.frank@datatables.net",
            "office": "New York",
            "extn": "7439",
            "age": "63",
            "salary": "125250",
            "start_date": "2010-01-04"
        },
        {
            "id": "49",
            "first_name": "Zorita",
            "last_name": "Serrano",
            "position": "Software Engineer",
            "email": "z.serrano@datatables.net",
            "office": "San Francisco",
            "extn": "4389",
            "age": "56",
            "salary": "115000",
            "start_date": "2012-06-01"
        },
        {
            "id": "50",
            "first_name": "Jennifer",
            "last_name": "Acosta",
            "position": "Junior Javascript Developer",
            "email": "j.acosta@datatables.net",
            "office": "Edinburgh",
            "extn": "3431",
            "age": "43",
            "salary": "75650",
            "start_date": "2013-02-01"
        },
        {
            "id": "51",
            "first_name": "Cara",
            "last_name": "Stevens",
            "position": "Sales Assistant",
            "email": "c.stevens@datatables.net",
            "office": "New York",
            "extn": "3990",
            "age": "46",
            "salary": "145600",
            "start_date": "2011-12-06"
        },
        {
            "id": "52",
            "first_name": "Hermione",
            "last_name": "Butler",
            "position": "Regional Director",
            "email": "h.butler@datatables.net",
            "office": "London",
            "extn": "1016",
            "age": "47",
            "salary": "356250",
            "start_date": "2011-03-21"
        },
        {
            "id": "53",
            "first_name": "Lael",
            "last_name": "Greer",
            "position": "Systems Administrator",
            "email": "l.greer@datatables.net",
            "office": "London",
            "extn": "6733",
            "age": "21",
            "salary": "103500",
            "start_date": "2009-02-27"
        },
        {
            "id": "54",
            "first_name": "Jonas",
            "last_name": "Alexander",
            "position": "Developer",
            "email": "j.alexander@datatables.net",
            "office": "San Francisco",
            "extn": "8196",
            "age": "30",
            "salary": "86500",
            "start_date": "2010-07-14"
        },
        {
            "id": "55",
            "first_name": "Shad",
            "last_name": "Decker",
            "position": "Regional Director",
            "email": "s.decker@datatables.net",
            "office": "Edinburgh",
            "extn": "6373",
            "age": "51",
            "salary": "183000",
            "start_date": "2008-11-13"
        },
        {
            "id": "56",
            "first_name": "Michael",
            "last_name": "Bruce",
            "position": "Javascript Developer",
            "email": "m.bruce@datatables.net",
            "office": "Singapore",
            "extn": "5384",
            "age": "29",
            "salary": "183000",
            "start_date": "2011-06-27"
        },
        {
            "id": "57",
            "first_name": "Donna",
            "last_name": "Snider",
            "position": "Customer Support",
            "email": "d.snider@datatables.net",
            "office": "New York",
            "extn": "4226",
            "age": "27",
            "salary": "112000",
            "start_date": "2011-01-25"
        }
    ];

    var editor = new $.fn.dataTable.Editor( {
        // ajax: "../php/staff.php",
        table: "#example",
        idSrc: "id",
        fields: [ {
            label: "First name:",
            name: "first_name"
        }, {
            label: "Last name:",
            name: "last_name"
        }, {
            label: "Position:",
            name: "position"
        }, {
            label: "Office:",
            name: "office"
        }, {
            label: "Extension:",
            name: "extn"
        }, {
            label: "Start date:",
            name: "start_date",
            type: "datetime"
        }, {
            label: "Salary:",
            name: "salary"
        }
        ]
    } );

    // Activate an inline edit on click of a table cell
    $('#example').on( 'click', 'tbody td:not(:first-child)', function (e) {
        editor.inline( this );
    } );

    $('#example').DataTable( {
        dom: "Bfrtip",
        data: data,
        // ajax: "../php/staff.php",
        order: [[ 1, 'asc' ]],
        columns: [
            {
                data: null,
                defaultContent: '',
                className: 'select-checkbox',
                orderable: false
            },
            { data: "first_name" },
            { data: "last_name" },
            { data: "position" },
            { data: "office" },
            { data: "start_date" },
            { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) }
        ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ]
    } );



    // Collapse
    var group = $('#tablesGroup');
    var samples = $('#samples-tab');
    group.on('show.bs.collapse','.collapse', function() {
        group.find('.collapse.show').collapse('hide');
    });
    samples.on('click', function () {
        group.find('.collapse.show').collapse('hide');
    });

    $('.portfolio-link').on('click', function(){
        var itemCollapsed = $(this).attr('data-target');

        $(itemCollapsed).on('shown.bs.collapse', function (e) {
            $('html,body').animate({
                scrollTop: $('#itemToScroll').offset().top - 100
            }, 500);
        });

    });

    // Select2
    $('.advanced .select2').select2({ width: '100%' });

    // DatePicker
    $('.advanced .datepicker').datepicker({
        format: 'yyyy/mm/dd' // El formato por defecto es dd/mm/yyyy
    });

    // Save new record in table
    var btnSave = $('.btn_save_dummy_record');

    btnSave.on('click', function (event) {
        event.preventDefault();
        var that = $(this);

        var name = that.parent().find('input.name');
        var jobPosition = that.parent().find('select.jobPosition');
        var office = that.parent().find('input.office');
        var age = that.parent().find('input.age');
        var startDate = that.parent().find('input.startDate');
        var salary = that.parent().find('input.salary');

        $('.table tbody').prepend(
            '<tr>' +
            '<td>'+name.val()+'</td>' +
            '<td>'+jobPosition.val()+'</td>' +
            '<td>'+office.val()+'</td>' +
            '<td>'+age.val()+'</td>' +
            '<td>'+startDate.val()+'</td>' +
            '<td>$'+salary.val()+'</td>' +
            '</tr>'
        );

        name.val('');
        jobPosition.val('');
        office.val('');
        age.val('');
        startDate.val('');
        salary.val('');

        // SweetAlert
        swal({
                title: "Bien hecho!",
                text: "El registro ha sido guardado correctamente",
                type: "success",
                // showCancelButton: true,
                confirmButtonClass: "btn-primary",
                confirmButtonText: "Ok",
                closeOnConfirm: true
            },
            function(){
                $('#collapseFilterTable').collapse('show');
            });
    });

    // Wizard Form
    var form = $("#wizard_form");
    form.validate({
        errorPlacement: function errorPlacement(error, element) { element.before(error); },
        rules: {
            confirm: {
                equalTo: "#password"
            }
        }
    });
    form.children("div").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        stepsOrientation: 1,
        onStepChanging: function (event, currentIndex, newIndex)
        {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex)
        {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex)
        {
            swal({
                    title: "Bien hecho!",
                    text: "Formulario finalizado",
                    type: "success",
                    // showCancelButton: true,
                    confirmButtonClass: "btn-primary",
                    confirmButtonText: "Ok",
                    closeOnConfirm: true
                },
                function(){
                    $('#collapseWizardForm').collapse('hide');
                });
        }
    });

    // Cleave
    var creditCard = new Cleave($('#creditCard'), {
        creditCard: true,
        onCreditCardTypeChanged: function (type) {
            $('.type').html(type.toUpperCase());
        }
    });

    var cleaveDate = new Cleave($('#cleaveDate'), {
       date: true,
       datePattern: ['Y', 'm', 'd']
    });

    var cleaveSalary = new Cleave($('#cleaveSalary'), {
        numeral: true,
        prefix: '$'
    })

    $('.category').select2({
        width: '100%'
    });

    // MultiSelect
    $('#my-select').multiSelect()

    // UISlider
    var sliderBasic = document.getElementById('nouislider_basic_example');
    noUiSlider.create(sliderBasic, {
        start: [30],
        connect: 'lower',
        step: 1,
        range: {
            'min': [0],
            'max': [100]
        }
    });
    getNoUISliderValue(sliderBasic, true);

    //Range Example
    var rangeSlider = document.getElementById('nouislider_range_example');
    noUiSlider.create(rangeSlider, {
        start: [32500, 62500],
        connect: true,
        range: {
            'min': 25000,
            'max': 100000
        }
    });
    getNoUISliderValue(rangeSlider, false);

    //Get noUISlider Value and write on
    function getNoUISliderValue(slider, percentage) {
        slider.noUiSlider.on('update', function () {
            var val = slider.noUiSlider.get();
            if (percentage) {
                val = parseInt(val);
                val += '%';
            }
            $(slider).parent().find('span.js-nouislider-value').text(val);
        });
    }

})(jQuery); // End of use strict


//////////////////////////////////////// variables



//
//
// var svg = document.getElementById('svg');
// var dotMatrix = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
// var dots = [];
// var lineMatrix = document.createElementNS("http://www.w3.org/2000/svg", 'line');
// var lines = [];
// var dotNumber = 500;
// var lineNumber = 5;
//
// var screenW;
// var screenH;
// var dotColumns;
// var dotRows;
// var dotRandomMax = 2;
//
// var mouseMoving = false;
// var mouse = {};
//     mouse.distances = [];
//     mouse.power = 10;
//
//
//
//
//
// //////////////////////////////////////// init
//
//
// function init() {
//   console.log('--- init')
//   screenW = window.innerWidth;
//   screenH = window.innerHeight;
//
//   dotRows = Math.sqrt(dotNumber * (screenH / screenW));
//   dotColumns = dotNumber / dotRows;
//   var dotPosStepX = Math.round(screenW / dotColumns);
//   var dotPosStepY = Math.round(screenH / dotRows);
//   dotRows = Math.round(dotRows);
//   dotColumns = Math.round(dotColumns);
//   console.log('--- calc done');
//
//
//
//
//   for (i = 0, j = 0, k = 0; i < dotNumber; i++, k++) {
//     if (i % dotColumns === 0) {
//       j++;
//       k = 0;
//     }
//
//     dots[i] = {};
//     dots[i].distances = [];
//     dots[i].el = dotMatrix.cloneNode(false);
//     dots[i].X = k * dotPosStepX + dotPosStepX / 2;
//     dots[i].X += Math.floor((Math.random() * dotRandomMax) + 1 - dotRandomMax / 2);
//     dots[i].Y = j * dotPosStepY - dotPosStepY / 2;
//     dots[i].Y += Math.floor((Math.random() * dotRandomMax) + 1 - dotRandomMax / 2);
//     dots[i].r = 1;
//     dots[i].lines = [];
//     dots[i].el.setAttribute('cx', dots[i].X);
//     dots[i].el.setAttribute('cy', dots[i].Y);
//     dots[i].el.setAttribute('r', dots[i].r);
//
//     svg.appendChild(dots[i].el);
//
//     for(l=0;l<lineNumber;l++) {
//       dots[i].lines[l] = {};
//       dots[i].lines[l].el = lineMatrix.cloneNode(false);
//       dots[i].lines[l].X1 = dots[i].X;
//       dots[i].lines[l].Y1 = dots[i].Y;
//       dots[i].lines[l].X2 = dots[i].X;
//       dots[i].lines[l].Y2 = dots[i].Y;
//       dots[i].lines[l].el.setAttribute('x1', dots[i].lines[l].X1);
//       dots[i].lines[l].el.setAttribute('y1', dots[i].lines[l].Y1);
//       svg.appendChild(dots[i].lines[l].el);
//     }
//   }
//   console.log('--- dots positioned');
//
// }
//
// function destroy(){
//
//   while (svg.firstChild) {
//     svg.removeChild(svg.firstChild);
// }
//   dots.length = 0;
//   lines.length = 0;
//   console.log('--- destroying')
// }
//
// init();
//
// //////////////////////////////////////// update dots and lines position
//
//
//
//
//
// function dotUpdate() {
//   for (i=0;i<dotNumber;i++) {
//     dots[i].el.setAttribute('cx', dots[i].X);
//     dots[i].el.setAttribute('cy', dots[i].Y);
//     dots[i].el.setAttribute('r', dots[i].r);
//     for(l=0;l<lineNumber;l++) {
//       dots[i].lines[l].el.setAttribute('x1',dots[i].lines[l].X1);
//       dots[i].lines[l].el.setAttribute('y1',dots[i].lines[l].Y1);
//       dots[i].lines[l].el.setAttribute('x2',dots[i].lines[l].X2);
//       dots[i].lines[l].el.setAttribute('y2',dots[i].lines[l].Y2);
//     }
//   }
// }
//
//
//
//
//
// //////////////////////////////////////// helpers
//
//
//
//
//
// function getDistance(obj1, obj2) {
//   return Math.floor(Math.sqrt(Math.pow((obj1.X - obj2.X), 2) + Math.pow((obj1.Y - obj2.Y), 2)));
// }
//
// function Comparator(a, b) {
//    if (a[1] < b[1]) return -1;
//    if (a[1] > b[1]) return 1;
//    return 0;
//  }
//
//
//
//
//
// //////////////////////////////////////// movement function
//
//
//
//
//
// function moveDots(){
//   for (i=0;i<dotNumber;i++) {
//     dots[i].X += Math.floor((Math.random() * 5)  - 2);
//     dots[i].Y += Math.floor((Math.random() * 5)  - 2);
//     for (j=0;j<dotNumber;j++) {
//       dots[i].distances[j] = [j , getDistance(dots[i], dots[j])];
//     }
//     dots[i].distances = dots[i].distances.sort(Comparator);
//      for(k=0;k<lineNumber;k++) {
//         dots[i].lines[k].X1 = dots[i].X;
//         dots[i].lines[k].Y1 = dots[i].Y;
//         dots[i].lines[k].X2 = dots[dots[i].distances[k][0]].X;
//         dots[i].lines[k].Y2 = dots[dots[i].distances[k][0]].Y;
//     }
//   }
//   dotUpdate();
// }
//
//
//
//
//
// //////////////////////////////////////// mouse interaction function
//
//
//
//
// function mouseInteraction() {
//   if(mouseMoving) {
//
//     mouse.X = mouseX;
//     mouse.Y = mouseY;
//
//     for (i=0;i<dotNumber;i++) {
//       dots[i].r = 1;
//       mouse.distances[i] = [i, getDistance(mouse, dots[i])];
//     }
//     mouse.distances = mouse.distances.sort(Comparator);
//
//     for(j=0;j<mouse.power;j++) {
//
//       var maxDist = mouse.distances[mouse.power-1][1];
//       var thisDist = mouse.distances[j][1];
//       dots[mouse.distances[j][0]].r = 2;
//
//       if(mouseX >= dots[mouse.distances[j][0]].X) {
//         dots[mouse.distances[j][0]].X -= (maxDist - thisDist)/15;
//       } else {
//         dots[mouse.distances[j][0]].X += (maxDist - thisDist)/15;
//       }
//       if(mouseY >= dots[mouse.distances[j][0]].Y) {
//         dots[mouse.distances[j][0]].Y -= (maxDist - thisDist)/15;
//       } else {
//         dots[mouse.distances[j][0]].Y += (maxDist - thisDist)/15;
//       }
//
//     }
//
//     mouseMoving = false;
//   }
// }
//
//
//
//
//
// //////////////////////////////////////// listeners
//
//
//
//
//
// var initInterval = setInterval(function(){
//   moveDots();
//   mouseInteraction();
// }, 20);
//
//
// svg.addEventListener('mousemove', function(e){
//   mouseMoving = true;
//   mouseX = e.pageX;
//   mouseY = e.pageY - document.getElementById("portfolio").offsetTop;
// });
//
// window.addEventListener('resize', function(){
//   destroy();
//   init();
// });
//
