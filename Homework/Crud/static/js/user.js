// form id 가져오기 
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const username = document.getElementById('username');

    form.addEventListener('submit', async (ev) => {
        // 폼에 원래 있던 본연의 기능인 다른페이지로 요청하는 것 하지 못하게...
        ev.preventDefault();
        // console.log(username.value);
        const name = username.value;

        if (!name) {
            alert('이름을 입력하세요');
            return;
            // console.log("이름이 없네요");
        } else {
            console.log("이름이 있네요", name);
        }

        // fetch를 통해서 내가 원하는 API의 정보를 불러온다...
        // 비동기 코드(를 동기화시켜서 짜고 있음)
        // POST 요청을 한 것... 이름을 JSON 형식으로 바디(Body)에 담아서
        try {
            const response = await fetch('/user', {
                method: 'POST',
                header: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name }),
            });

            if (response.ok) {
                alert('등록 성공');
                // 등록 성공시 화면 컴포넌트 추가 : 리프레시 아님
                await updateTable();
            } else {
                const errorMessage = await response.text();
                alert(`등록 실패: ${errorMessage}`);
            }
        } catch (error) {
            console.error('등록 중 오류 발생:', error);
            alert('등록 중 오류 발생');
        }
    });
});

async function updateTable() {
    // 갱신을 위해서, 최신 정보를 가져옴. fetch 사용
    await fetch('/user')
        .then(response => response.json())
        .then(users => displayUsers(users))
        .catch(error => console.error("사용자 정보 불러오기 실패:", error));
}

function displayUsers(users) {
    // users에는 json 포멧의 사용자 데이터를 다 가지고 있음
    const userTable = document.getElementById('userTable');

    if (Object.keys(users).length === 0) {
        const messageRow = document.createElement('div');
        messageRow.textContent = '등록된 사용자가 없습니다';
        userTable.appendChild(messageRow);
    } else {
        // for (const key in users) {
        //     const row = document.createElement('div');
        //     row.innerHTML = `ID: ${key}, Name: ${users[key]}`;
        //     userTable.appendChild(row);
        // }
        const curKey = getLastKey(users);
        const date = Date.now();
        const row = document.createElement('div');
        row.innerHTML = `<strong>ID:</strong> ${date}, <strong>Name:</strong> ${users[curKey]}`;

        // 버튼 생성
        const fixButton = document.createElement('button');
        const delButton = document.createElement('button');
        fixButton.textContent = '수정';
        delButton.textContent = '삭제';
        // row.appendChild();
        row.appendChild(fixButton);
        row.appendChild(delButton);
        userTable.appendChild(row);

        username.value = '';

        fixButton.addEventListener('click', async () => {

            const newName = prompt('새로운 이름 입력:', users[curKey]);

            // 사용자가 취소를 누르거나 빈 값을 입력한 경우 중단
            if (newName === null || newName.trim() === '') {
                return;
            }

            try {
                // 수정된 값을 서버로 전송
                const response = await fetch(`/user/${curKey}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: newName }),
                });

                if (!response.ok) {
                    const errorMessage = await response.text();
                    throw new Error(`수정 실패: ${errorMessage}`);
                }

                console.log(users);
                // 수정 후 테이블 갱신
                console.log('테이블 수정 됬어요~');
                await updateTable();

            } catch (error) {
                console.error('사용자 수정 중 오류 발생:', error);
                alert('사용자 수정 중 오류 발생');
            }

            // 여기에 삭제를 처리하는 로직 추가
            // await deleteUser(lastKey);
            // 삭제 후 테이블 갱신
            // await updateTable();
        });
    }
}

function getLastKey(obj) {
    const keys = Object.keys(obj);
    return keys[keys.length - 1];
}
