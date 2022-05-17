const DELAY_PER_MEMBER = 1700

function popup_rollpaper(member, x) {
    const $paper = $(`
    <div class="rollpaper">
        <div>
            <p class="nick">${member.nickname}</p>
            <p class="name">${member.name}</p>
            <p class="role">${member.role.join(', ')}</p>
            ${(member.link != "") ? `<p><a href="${member.link}" target="_blank"><i class="fa fa-link"></i></a></p>` : '<p></p>'}
        </div>
    <div>
    `);
    $paper.css({'left': (x - 50) + 'px'});
    


    $('#members').append($paper);

    $paper.animate({
        bottom: '120px',
        opacity: '1'
    }, 1500);



    return $paper;
}

function create_treasure_box(member, x) {
    const $box = $(`<div class="treasure-box closed"></div>`);
    let $paper = undefined;
    $box.css({'left': x + 'px'})

    $box.click(function(evt) {
        if ($box.hasClass('opened')) {
            $box.removeClass('opened');
            setTimeout(() => {
                if ($paper) {
                    $paper.animate({
                        opacity: 0
                    }, 500, 'linear', () => { $paper.remove() })
                }
                
                $box.animate({
                    opacity: 0
                }, 500, 'linear', () => { $box.remove() })
                
            })
        } else {
            $box.addClass('opened');
            $paper = popup_rollpaper(member, x);
        }
        
    })

    $('#members').append($box);
}

function flying_soul(x, y) {
    const $soul = $(`<div class="soul"></div>`);
    $soul.css({'bottom': '50px', 'left': x + 'px'})
    
    $('#members').append($soul);

    $soul.animate({
        bottom: '175px',
        opacity: '1'
    }, 1000, 'linear', function() {
        $soul.animate({
            bottom: '300px',
            opacity: '0'
        }, 1000, 'linear', function() {
            $soul.remove();
        })
        
    });
}

function make_person(obj) {
    const $div = $(`
    <div class="member" name="${obj.name}">
        <p>${obj.nickname}</p>
        <a href="${obj.link}" target="_blank"></a>
    </div>`);
    $div.alive = true;

    size = (obj.height - 100);
    $div.css({'height': size + 'px', 'width': (size / 8) * 5 + 'px'})
    $div.click(function(evt) {
        if ($div.alive) {
            $div.alive = false;

            duration = 500;
            $div.animate({
                opacity: 0
            }, { duration: duration, queue: false }, 'linear');

            setTimeout(function (){
                flying_soul(evt.pageX, evt.pageY);
                create_treasure_box(obj, evt.pageX);
                $div.finish();
            }, duration);
        }
    })
    
    return $div;
}


function walk() {
    member_list = MEMBERS.slice();
    member_list.sort(() => Math.random() - 0.5);

    member_list.forEach(function(e, idx) {
        const member = e;
        const delay = DELAY_PER_MEMBER * idx
                + Math.floor(Math.random() * (DELAY_PER_MEMBER/2));
        
        setTimeout(function() {
            const $member = make_person(member);
            $('#members').append($member);
            $member.animate({
                left: window.innerWidth + 'px'
            }, window.innerWidth * 20, 'linear', function() {
                $member.remove();
            });
        }, delay);
    })
}


function start_waking_animation() {
    walk();
    setInterval(function() {
        walk();
    }, (MEMBERS.length * DELAY_PER_MEMBER + (12 * 1000)))
}