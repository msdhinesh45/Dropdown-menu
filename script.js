const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggle.onclick = function() {
    navigation.classList.toggle('active');
};
