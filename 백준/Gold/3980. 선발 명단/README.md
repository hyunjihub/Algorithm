# [Gold V] 선발 명단 - 3980 

[문제 링크](https://www.acmicpc.net/problem/3980) 

### 성능 요약

메모리: 10972 KB, 시간: 168 ms

### 분류

백트래킹, 브루트포스 알고리즘

### 제출 일자

2025년 4월 22일 21:35:56

### 문제 설명

<p>챔피언스 리그 결승전을 앞두고 있는 맨체스터 유나이티드의 명장 퍼거슨 감독은 이번 경기에 4-4-2 다이아몬드 전술을 사용하려고 한다.<img alt="" src="https://www.acmicpc.net/upload/images/442.png" style="width: 170px; height: 226px; float: right;"></p>

<p>오늘 결승전에 뛸 선발 선수 11명은 미리 골라두었지만, 어떤 선수를 어느 포지션에 배치해야 할지 아직 결정하지 못했다.</p>

<p>수석코치 마이크 펠란은 11명의 선수가 각각의 포지션에서의 능력을 0부터 100까지의 정수로 수치화 했다. 0은 그 선수가 그 포지션에 적합하지 않다는 뜻이다.</p>

<p>이때, 모든 선수의 포지션을 정하는 프로그램을 작성하시오. 모든 포지션에 선수를 배치해야 하고, 각 선수는 능력치가 0인 포지션에 배치될 수 없다.</p>

### 입력 

 <p>입력은 여러 개의 테스트 케이스로 이루어져 있다. 첫째 줄에는 테스트 케이스의 개수 C가 주어진다. 각각의 케이스는 11줄로 이루어져 있고, i번 줄은 0과 100사이의 11개의 정수 s<sub>ij</sub>를 포함하고 있다. s<sub>ij</sub>는 i번선수가 j번 포지션에서 뛸 때의 능력이다. 모든 선수에게 적합한 포지션의 수는 최대 5개이다. (능력치가 0보다 크다)</p>

### 출력 

 <p>각각의 테스트 케이스에 대해서, 모든 포지션의 선수를 채웠을 때, 능력치의 합의 최댓값을 한 줄에 하나씩 출력한다. 항상 하나 이상의 올바른 라인업을 만들 수 있다.</p>

